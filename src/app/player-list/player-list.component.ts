import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Level } from '../enums/level';
import { PlayFreeComponent } from '../play-free/play-free.component';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';


@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule, PlayFreeComponent],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent implements OnInit{
  players!: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }
}
