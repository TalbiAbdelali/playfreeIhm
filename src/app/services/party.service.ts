import { Injectable } from '@angular/core';
import { Party } from '../models/party';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  parties: Party[] = [
    // Future parties
    {
      id: 1,
      date: '2026-07-10',
      hour: '18:00',
      duration: 90,
      location: 'Central Park',
      field: 'Field 1',
      teamA: 'Lions',
      teamB: 'Tigers',
      paid: false
    },
    {
      id: 2,
      date: '2026-07-12',
      hour: '20:00',
      duration: 60,
      location: 'Downtown Arena',
      field: 'Field 2',
      teamA: 'Eagles',
      teamB: 'Sharks',
      paid: true
    },
    {
      id: 3,
      date: '2026-07-15',
      hour: '19:30',
      duration: 120,
      location: 'West Side',
      field: 'Field 3',
      teamA: 'Bears',
      teamB: 'Wolves',
      paid: false
    },
    {
      id: 4,
      date: '2026-07-18',
      hour: '17:00',
      duration: 90,
      location: 'East Field',
      field: 'Field 4',
      teamA: 'Falcons',
      teamB: 'Hawks',
      paid: true
    },
    {
      id: 5,
      date: '2024-07-20',
      hour: '21:00',
      duration: 60,
      location: 'North Stadium',
      field: 'Field 5',
      teamA: 'Panthers',
      teamB: 'Rhinos',
      paid: false
    },
    {
      id: 6,
      date: '2024-07-22',
      hour: '16:00',
      duration: 75,
      location: 'South Arena',
      field: 'Field 6',
      teamA: 'Cheetahs',
      teamB: 'Leopards',
      paid: true
    },
    // Ongoing parties (today)
    {
      id: 7,
      date: '2024-06-09',
      hour: '10:00',
      duration: 120,
      location: 'Central Park',
      field: 'Field 1',
      teamA: 'Lions',
      teamB: 'Tigers',
      paid: false
    },
    {
      id: 8,
      date: '2025-09-09',
      hour: '14:00',
      duration: 90,
      location: 'Downtown Arena',
      field: 'Field 2',
      teamA: 'Eagles',
      teamB: 'Sharks',
      paid: true
    },
    // Past parties
    {
      id: 9,
      date: '2024-06-01',
      hour: '18:00',
      duration: 60,
      location: 'West Side',
      field: 'Field 3',
      teamA: 'Bears',
      teamB: 'Wolves',
      paid: false
    },
    {
      id: 10,
      date: '2025-08-28',
      hour: '20:00',
      duration: 90,
      location: 'East Field',
      field: 'Field 4',
      teamA: 'Falcons',
      teamB: 'Hawks',
      paid: true
    }
  ];

  getParties(): Party[] {
    return this.parties;
  }
}
