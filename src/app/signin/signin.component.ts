// signin.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  message!: string;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.initSignInForm();
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const storedCredentials = JSON.parse(localStorage.getItem('credentials') || '{}');

      if (this.validateCredentials(storedCredentials)) {
        this.authService.setAuthState({ isAuthenticated: true });
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Invalid credentials');
        this.message = 'Invalid credentials';
      }
    }
  }

  private initSignInForm(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private validateCredentials(storedCredentials: any): boolean {
    return (
      storedCredentials &&
      storedCredentials.username === this.signInForm.value.username &&
      storedCredentials.password === this.signInForm.value.password
    );
  }
}
