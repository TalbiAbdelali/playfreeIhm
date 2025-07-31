import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party } from '../models/party';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-parties',
  imports: [
    CommonModule
  ],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  parties: Party[] = [];
  today: string = new Date().toISOString().slice(0, 10);

  constructor(private partyService: PartyService, private router: Router) { }

  ngOnInit(): void {
    this.parties = this.partyService.getParties();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getPartyCardClass(party: Party): string {
    if (party.date && this.today && party.date < this.today) {
      return 'opacity-50 grayscale pointer-events-none';
    }
    return '';
  }
}
