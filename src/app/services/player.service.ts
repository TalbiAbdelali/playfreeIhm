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
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=youssef',
      position: 'Milieu',
      positionX: 100,
      positionY: 70,
      stats: { matches: 25, goals: 5, assists: 10, cards: 1 },
      performance: { defense: 60, attack: 70, creativity: 80, tactics: 75, technique: 65 },
      lastScores: [1, 2, 1, 3, 0],
      reviews: [
        { author: 'Kamal', rating: 4, comment: 'Bon joueur, très technique.' },
        { author: 'Amine', rating: 5, comment: 'Excellente vision de jeu.' }
      ]
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
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=kamal',
      position: 'Attaquant',
      positionX: 150,
      positionY: 75,
      stats: { matches: 30, goals: 20, assists: 5, cards: 3 },
      performance: { defense: 50, attack: 90, creativity: 70, tactics: 80, technique: 85 },
      lastScores: [2, 3, 1, 4, 0],
      reviews: [
        { author: 'Youssef', rating: 5, comment: 'Attaquant très rapide et efficace.' },
        { author: 'Sara', rating: 4, comment: 'Bon finisseur, sait se démarquer.' }
      ]
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
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=badar',
      position: 'Défenseur',
      positionX: 70,
      positionY: 80,
      stats: { matches: 10, goals: 0, assists: 1, cards: 2 },
      performance: { defense: 75, attack: 30, creativity: 40, tactics: 60, technique: 50 },
      lastScores: [0, 0, 1, 0, 0],
      reviews: [
        { author: 'Omar', rating: 3, comment: 'Défenseur prometteur, à travailler.' }
      ]
    },
    {
      id : 4,
      pseudo : "amine",
      email : "amine@email.com",
      birthday : new Date("1995-05-10"),
      phone : "0612345678",
      soccerLevel : Level.ADVANCED,
      availability : true,
      likes : 25,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=amine',
      position: 'Attaquant',
      positionX: 170,
      positionY: 72,
      stats: { matches: 40, goals: 28, assists: 12, cards: 2 },
      performance: { defense: 60, attack: 95, creativity: 80, tactics: 70, technique: 90 },
      lastScores: [2, 1, 3, 0, 2],
      reviews: [
        { author: 'Youssef', rating: 5, comment: 'Très bon attaquant, rapide et technique.' },
        { author: 'Sara', rating: 4, comment: 'Toujours décisif dans les matchs importants.' }
      ]
    },
    {
      id : 5,
      pseudo : "sara",
      email : "sara@email.com",
      birthday : new Date("1998-03-22"),
      phone : "0623456789",
      soccerLevel : Level.INTERMEDIATE,
      availability : false,
      likes : 15,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=sara',
      position: 'Milieu',
      positionX: 112,
      positionY: 60,
      stats: { matches: 32, goals: 10, assists: 18, cards: 1 },
      performance: { defense: 70, attack: 65, creativity: 90, tactics: 85, technique: 80 },
      lastScores: [1, 1, 2, 1, 0],
      reviews: [
        { author: 'Amine', rating: 5, comment: 'Très créative et bonne vision du jeu.' }
      ]
    },
    {
      id : 6,
      pseudo : "mehdi",
      email : "mehdi@email.com",
      birthday : new Date("1991-11-30"),
      phone : "0634567890",
      soccerLevel : Level.BEGINNER,
      availability : true,
      likes : 5,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=mehdi',
      position: 'Défenseur',
      positionX: 60,
      positionY: 72,
      stats: { matches: 20, goals: 1, assists: 3, cards: 4 },
      performance: { defense: 80, attack: 30, creativity: 40, tactics: 60, technique: 50 },
      lastScores: [0, 0, 1, 0, 0],
      reviews: [
        { author: 'Omar', rating: 4, comment: 'Solide en défense, manque un peu de relance.' }
      ]
    },
    {
      id : 7,
      pseudo : "layla",
      email : "layla@email.com",
      birthday : new Date("1997-09-18"),
      phone : "0645678901",
      soccerLevel : Level.ADVANCED,
      availability : false,
      likes : 30,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=layla',
      position: 'Gardien',
      positionX: 24,
      positionY: 72,
      stats: { matches: 50, goals: 0, assists: 2, cards: 3 },
      performance: { defense: 95, attack: 20, creativity: 60, tactics: 85, technique: 75 },
      lastScores: [0, 1, 0, 0, 1],
      reviews: [
        { author: 'Reda', rating: 5, comment: 'Excellente gardienne, réflexes impressionnants.' }
      ]
    },
    {
      id : 8,
      pseudo : "omar",
      email : "omar@email.com",
      birthday : new Date("1994-12-05"),
      phone : "0656789012",
      soccerLevel : Level.INTERMEDIATE,
      availability : true,
      likes : 18,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=omar',
      position: 'Défenseur',
      positionX: 50,
      positionY: 100,
      stats: { matches: 28, goals: 2, assists: 5, cards: 2 },
      performance: { defense: 75, attack: 40, creativity: 55, tactics: 70, technique: 60 },
      lastScores: [1, 0, 0, 1, 1],
      reviews: [
        { author: 'Layla', rating: 4, comment: 'Bon défenseur, fiable et appliqué.' }
      ]
    },
    {
      id : 9,
      pseudo : "nadia",
      email : "nadia@email.com",
      birthday : new Date("1996-06-14"),
      phone : "0667890123",
      soccerLevel : Level.BEGINNER,
      availability : true,
      likes : 8,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=nadia',
      position: 'Milieu',
      positionX: 112,
      positionY: 84,
      stats: { matches: 15, goals: 3, assists: 4, cards: 0 },
      performance: { defense: 55, attack: 50, creativity: 65, tactics: 60, technique: 55 },
      lastScores: [0, 1, 0, 1, 0],
      reviews: [
        { author: 'Sara', rating: 3, comment: 'Bonne progression, motivée.' }
      ]
    },
    {
      id : 10,
      pseudo : "reda",
      email : "reda@email.com",
      birthday : new Date("1990-02-28"),
      phone : "0678901234",
      soccerLevel : Level.ADVANCED,
      availability : false,
      likes : 50,
      imageUrl : 'https://api.dicebear.com/7.x/thumbs/svg?seed=reda',
      position: 'Attaquant',
      positionX: 176,
      positionY: 76,
      stats: { matches: 60, goals: 40, assists: 15, cards: 5 },
      performance: { defense: 65, attack: 92, creativity: 78, tactics: 80, technique: 88 },
      lastScores: [3, 2, 2, 1, 4],
      reviews: [
        { author: 'Amine', rating: 5, comment: 'Buteur hors pair, très efficace.' },
        { author: 'Mehdi', rating: 4, comment: 'Toujours dangereux devant le but.' }
      ]
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
