import { Player } from "./player";
import { Stats } from "./stats";

export interface Match{
    player:string;
    playerRef:string;
    rival:string;
    fecha:string;
    result:string;
    stats:Stats;
    statsAgainst:Stats;
    video?:File;
    winner:string;
}