import { Injectable } from '@angular/core';
import { Level } from '../enums/level';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [
      {
      id : 1,
      pseudo : "youssef",
      email : "mote3@email.com",
      birthday : new Date("1992-07-12"),
      phone : "0600000558",
      soccerLevel : Level.INTERMEDIATE,
      availability : true,
      likes : 10,
      imageUrl : 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/9b498e93-2063-4957-84fc-f0810dbce0f6/165e4f65-f195-4006-8997-f50626bd9624.png'
    },
    {
      id : 2,
      pseudo : "kamal",
      email : "motasim@email.com",
      birthday : new Date("1993-08-13"),
      phone : "0600760558",
      soccerLevel : Level.ADVANCED,
      availability : false,
      likes : 100,
      imageUrl : 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/9b498e93-2063-4957-84fc-f0810dbce0f6/165e4f65-f195-4006-8997-f50626bd9624.png'
    },
    {
      id : 3,
      pseudo : "badar",
      email : "dawd@email.com",
      birthday : new Date("2000-01-20"),
      phone : "0609400558",
      soccerLevel : Level.BEGINNER,
      availability : true,
      likes : 2,
      imageUrl : 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/9b498e93-2063-4957-84fc-f0810dbce0f6/165e4f65-f195-4006-8997-f50626bd9624.png'
    }
  ]

  getPlayers() : Player[] {
    return this.players;
  }

  getPlayerById(playerId: number): Player {
    const player = this.players.find((player) => player.id === playerId);
    if (!player) {
        throw new Error('FaceSnap not found!');
    } else {
        return player;
    }
  }
  
  likaePlayerById(playerId: number, likeType: 'Like' | 'Dislike'): void {
    const player = this.getPlayerById(playerId);
    likeType === 'Like' ? player.likes++ : player.likes--;
  }

}
