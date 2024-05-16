import { Component } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-player',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss'
})
export class SinglePlayerComponent {

  player! : Player;

  buttonText! : string;

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.buttonText = "Like";
    const playerId = +this.route.snapshot.params['id']; // '+' trasform strig to umber
    this.player = this.playerService.getPlayerById(playerId);
  }

  onLike(){
    console.log("new like");
    if(this.buttonText === "Like") {
      this.playerService.likaePlayerById(this.player.id, 'Like');
      this.buttonText = "Dislike";
    } else {
      this.playerService.likaePlayerById(this.player.id, 'Dislike');
      this.buttonText = "Like";
    }
    
  }
}
