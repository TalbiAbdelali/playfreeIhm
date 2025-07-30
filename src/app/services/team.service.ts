import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { Level } from '../enums/level';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[];

  constructor(private playerService: PlayerService) {
    const allPlayers = this.playerService.getPlayers();
    this.teams = [
      {
        id: 1,
        name: 'Les Aigles',
        players: allPlayers.slice(0, 5), // joueurs 1 à 5
        availability: true,
        generalLevel: Level.ADVANCED,
        lastResults: [1, 0, 1, -1, 0],
        captain: allPlayers[0],
        coach: 'Coach Alpha'
      },
      {
        id: 2,
        name: 'Tigres Rouges',
        players: allPlayers.slice(5, 10), // joueurs 6 à 10
        availability: false,
        generalLevel: Level.INTERMEDIATE,
        lastResults: [1, 1, 1, 0, 1],
        captain: allPlayers[5],
        coach: 'Coach Bravo'
      },
      {
        id: 3,
        name: 'Panthères Noires',
        players: [],
        availability: true,
        generalLevel: Level.INTERMEDIATE,
        lastResults: [-1, 0, -1, 0, 1],
        captain: {} as Player,
        coach: 'Coach Charlie'
      }
    ];
  }

  getTeams(): Team[] {
    return this.teams;
  }
}
