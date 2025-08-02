import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mode: 'login' | 'signup' = 'login';
  email = '';
  password = '';
  role: 'admin' | 'user' | 'viewer' = 'user';
  error = '';
  success = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  switchMode(mode: 'login' | 'signup') {
    this.mode = mode;
    this.error = '';
    this.success = '';
  }
  
  onSubmit() {
    if (this.mode === 'login') {
      const result = this.authService.login(this.email, this.password);
      if (result.success) {
        this.error = '';
        this.success = '';
        this.router.navigate(['/']);
      } else {
        this.error = result.message ?? 'An unknown error occurred.';
        this.success = '';
      }
    } else {
      const result = this.authService.signup(this.email, this.password, this.role);
      if (result.success) {
        this.switchMode('login');
        this.success = 'Account created. Please log in.';
        this.error = '';
      } else {
        this.error = result.message ?? 'An unknown error occurred.';
        this.success = '';
      }
    }
  }
}
