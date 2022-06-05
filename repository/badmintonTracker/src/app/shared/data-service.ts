import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../Interfaces/match';
import { Player } from '../Interfaces/player';
import { Stats, PerStats } from '../Interfaces/stats';

@Injectable({providedIn: 'root'})
export class DataService {


    constructor() { }
    selectedPlayer:Player;
    selectedMatch:Match;

    setPerStats(stats:Stats){
        let total = (stats.drop+stats.feint+stats.longCourt+stats.netPlay+stats.oppNonForcedError+stats.smash);
        stats.perStats= {'perDrop':null,'perFeint':null, 'perLongCourt':null,'perNetPlay':null,'perOppNonForcedError':null,'perSmash':null};
        if(total!=0){
          stats.perStats.perDrop = parseFloat(((stats.drop/total)*100).toFixed(2));
          stats.perStats.perFeint = parseFloat(((stats.feint/total)*100).toFixed(2));
          stats.perStats.perLongCourt = parseFloat(((stats.longCourt/total)*100).toFixed(2));
          stats.perStats.perNetPlay = parseFloat(((stats.netPlay/total)*100).toFixed(2));
          stats.perStats.perOppNonForcedError = parseFloat(((stats.oppNonForcedError/total)*100).toFixed(2));
          stats.perStats.perSmash = parseFloat(((stats.smash/total)*100).toFixed(2));
        }
        else{
          stats.perStats.perDrop = 0;
          stats.perStats.perFeint = 0;
          stats.perStats.perLongCourt = 0;
          stats.perStats.perNetPlay = 0;
          stats.perStats.perOppNonForcedError = 0;
          stats.perStats.perSmash = 0;
        }
        return stats;
      }   
}