import { Player } from "./player";
import { Level } from "../enums/level";

export class Team {
    id!: number;
    name!: string;
    players!: Player[];
    availability!: boolean;
    generalLevel!: Level;
    lastResults!: number[]; // Ex: [1, 0, 1, -1, 0] (victoire, nul, défaite, etc.)
    captain!: Player;
    coach!: string;
}
