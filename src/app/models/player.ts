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
}
