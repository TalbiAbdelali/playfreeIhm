import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  user: User | null = null;

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef,
    private router: Router) {}

  ngDoCheck(): void {
    const current = this.authService.getCurrentUser();
    if (this.user !== current) {
      this.user = current;
      this.cdr.markForCheck();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
