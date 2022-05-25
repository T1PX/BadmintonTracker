import { Component } from '@angular/core';
import { Match } from '../Interfaces/match';
import { InMatchPlayer, Player } from '../Interfaces/player';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor() {}
  player1:InMatchPlayer = {'score':null,'sets':null,'name':null,'category':null};
  player2:InMatchPlayer = {'score':null,'sets':null,'name':null,'category':null};
  match:Match = {'player':null,'fecha':null,'result':null,'rival':null,'stats':null,'statsAgainst':null,'winner':null};
  date = new Date().toISOString();
  set1Score:string;
  set2Score:string;
  set3Score:string;

  ngOnInit(){
    this.player1.name = "player 1";
    this.player2.name = "player 2";
    this.player1.score=0;
    this.player2.score=0;
    this.player1.matches= new Array<Match>();
    this.match.player=this.player1;
    this.match.rival=this.player2.name;
  }
  point(pl){
    if(pl==1){
      //display modal punto
      this.player1.score=(this.player1.score+7);
    }
    else{
      //display modal punto
      this.player2.score=(this.player2.score+7);
    }
    if((this.player1.score>=21 && (this.player1.score-this.player2.score)>2)
    ||  (this.player2.score>=21 && (this.player2.score-this.player1.score)>2)
    || (this.player1.score>29 || this.player2.score>29))
    {
      this.setOver()
    }
  }

  setOver() {

    if((this.player1.sets+this.player2.sets)==0){
      this.set1Score = this.player1.score+" - "+this.player2.score;
    }
    else if((this.player1.sets+this.player2.sets)==1){
      this.set2Score = this.player1.score+" - "+this.player2.score;
    }
    else if((this.player1.sets+this.player2.sets)==2){
      this.set3Score = this.player1.score+" - "+this.player2.score;
    }
    if (this.player1.score>this.player2.score){
      ++this.player1.sets;
      if(this.player1.sets==2){
        this.gameOver(this.player1);
      }
    }
    else {
      ++this.player2.sets;
      if(this.player2.sets==2){
        this.gameOver(this.player2);
      }
    }
    
    this.player1.score=0;
    this.player2.score=0;
    
  }

  gameOver(winner){
    this.match.winner=winner.name;
    if(this.set3Score){this.match.result= this.set1Score+' '+this.set2Score+' '+this.set3Score}
    else {this.match.result= this.set1Score+' '+this.set2Score}
    this.match.fecha= this.date;
    this.player1.matches.push(this.match);
    //modal match end
  }
}



