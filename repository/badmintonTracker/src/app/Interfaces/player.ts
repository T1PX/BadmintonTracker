import { Match } from './match';
import{ Stats } from './stats';
export interface Player {
    name: string;
    category:string;
    photo?: string;
    totalStats?: Stats;
    totalStatsAgainst?: Stats;
    matches?: Array<Match>;
}
export interface InMatchPlayer extends Player{
    score:number;
    sets:number;
}