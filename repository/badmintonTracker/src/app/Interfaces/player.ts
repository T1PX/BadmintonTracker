import { Match } from './match';
import{ Stats } from './stats';
export interface Player {
    name: string;
    category:string;
    ref:string;
    photo?: string;
    totalStats?: Stats;
    totalStatsAgainst?: Stats;
    matches: Array<Match>;
    score?:number;
    sets?:number;
}
// export interface InMatchPlayer extends Player{
//     score:number;
//     sets:number;
// }