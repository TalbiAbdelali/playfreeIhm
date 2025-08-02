import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament',
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}
