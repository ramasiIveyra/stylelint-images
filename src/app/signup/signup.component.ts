import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      const credentials = this.signupForm.value;

      // Store the user's credentials in local storage
      localStorage.setItem('credentials', JSON.stringify(credentials));

      // Navigate to the sign-in page
      this.router.navigateByUrl('/signin');

      console.log('Credentials stored:', credentials);
    }
  }
}
