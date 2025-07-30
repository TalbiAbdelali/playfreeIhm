import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
