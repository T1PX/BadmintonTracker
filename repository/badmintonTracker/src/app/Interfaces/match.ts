import { Stats } from "./stats";

export interface Match{
    player:string;
    playerRef:string;
    rival:string;
    date:string;
    result:string;
    stats:Stats;
    statsAgainst:Stats;
    video?:File;
    winner:string;
}
