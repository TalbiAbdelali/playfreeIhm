import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../enums/level';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play-free',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-free.component.html',
  styleUrl: './play-free.component.scss'
})
export class PlayFreeComponent implements OnInit{

  @Input() player! : Player;

  buttonText! : string;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onViewPlayer() {
    this.router.navigateByUrl(`players/${this.player.id}`);
  }

  getPlayerAge(player: Player): string | number {
    if (!player.birthday) return '-';
    const birthYear = new Date(player.birthday).getFullYear();
    return 2024 - birthYear;
  }


}
