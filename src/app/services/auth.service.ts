import { Injectable } from '@angular/core';

export type UserRole = 'admin' | 'user' | 'viewer';
export interface User {
  email: string;
  password: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
    { email: 'viewer@example.com', password: 'viewer123', role: 'viewer' }
  ];
  private currentUser: User | null = null;

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password.' };
  }

  signup(email: string, password: string, role: UserRole) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'Email already exists.' };
    }
    const newUser: User = { email, password, role };
    this.users.push(newUser);
    return { success: true };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const user = localStorage.getItem('currentUser');
      if (user) {
        //TODO : Consider adding validation or using a more secure storage mechanism.
        this.currentUser = JSON.parse(user);
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  getRole(): UserRole | null {
    return this.getCurrentUser()?.role || null;
  }
}
