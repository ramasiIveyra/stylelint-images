// sidebar.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth-service.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    // Clear credentials from local storage upon logout
    localStorage.removeItem('credentials');

    // Reset the authentication state
    this.authService.authState = {};

    this.router.navigateByUrl('/signup');
  }
}
