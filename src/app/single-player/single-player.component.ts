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

  // ...dans la classe SinglePlayerComponent...
  getRadarPoints(perf: any): string {
    // Défense, Attaque, Créativité, Tactique, Technique (dans cet ordre)
    const max = 100;
    const center = { x: 100, y: 100 };
    const radius = 70;
    const angles = [270, 342, 54, 126, 198]; // degrés pour chaque axe
    const values = [
      perf?.defense ?? 0,
      perf?.attack ?? 0,
      perf?.creativity ?? 0,
      perf?.tactics ?? 0,
      perf?.technique ?? 0
    ];
    return values.map((v, i) => {
      const angle = angles[i] * Math.PI / 180;
      const r = radius * (v / max);
      const x = center.x + r * Math.cos(angle);
      const y = center.y + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  }

  getRadarAxisPoints() {
    const max = 100;
    const center = { x: 100, y: 100 };
    const radius = 70;
    const angles = [270, 342, 54, 126, 198];
    return angles.map(a => {
      const angle = a * Math.PI / 180;
      return {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle)
      };
    });
  }
}
