import { Level } from "../enums/level";

export class Player {
    id!: number; 
    pseudo!: string;
    email!: string;
    birthday!: Date; 
    phone!: string;
    soccerLevel!: Level;
    availability!: boolean;
    likes!: number;
    imageUrl?: string;
    position!: string;
    positionX!: number;
    positionY!: number;
    stats!: {
        matches: number;
        goals: number;
        assists: number;
        cards: number;
    };
    performance!: {
        defense: number;
        attack: number;
        creativity: number;
        tactics: number;
        technique: number;
    };
    lastScores!: number[];
    reviews!: {
        author: string;
        rating: number;
        comment: string;
    }[];
}
