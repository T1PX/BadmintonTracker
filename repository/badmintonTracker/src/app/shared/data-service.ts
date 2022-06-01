import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../Interfaces/match';
import { Player } from '../Interfaces/player';

@Injectable({providedIn: 'root'})
export class DataService {


    constructor() { }
    selectedPlayer:Player;
    selectedMatch:Match;

}