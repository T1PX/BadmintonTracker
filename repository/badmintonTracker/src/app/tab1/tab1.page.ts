import { Component } from '@angular/core';
import { Player } from '../Interfaces/player';
import { Stats } from '../Interfaces/stats';
import { OnInit } from '@angular/core';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor() {}
  matchScore:string;
  player1 = new Player();
  player2 = new Player();
  
  player1Sets = 0;
  player2Sets = 0;

  set1Score:string;
  set2Score:string;
  set3Score:string;
  ngOnInit(){
    this.player1.setName("player 1");
    this.player2.setName("player 2");
    this.player1.setScore(0);
    this.player2.setScore(0);
  }
  point(pl){
    if(pl==1){
      //display modal punto
      this.player1.setScore(this.player1.getScore()+7);
    }
    else{
      //display modal punto
      this.player2.setScore(this.player2.getScore()+7);
    }
    if((this.player1.getScore()>=21 && (this.player1.getScore()-this.player2.getScore())>2)
    ||  (this.player2.getScore()>=21 && (this.player2.getScore()-this.player1.getScore())>2)
    || (this.player1.getScore()>29 || this.player2.getScore()>29))
    {
      this.setOver()
    }
  }

  setOver() {
    let setWinner:Player;

    if((this.player1Sets+this.player2Sets)==0){
      this.set1Score = this.player1.getScore()+" - "+this.player2.getScore();
    }
    else if((this.player1Sets+this.player2Sets)==1){
      this.set2Score = this.player1.getScore()+" - "+this.player2.getScore();
    }
    else if((this.player1Sets+this.player2Sets)==2){
      this.set3Score = this.player1.getScore()+" - "+this.player2.getScore();
    }
    if (this.player1.getScore()>this.player2.getScore()){
      setWinner = this.player1;
      ++this.player1Sets;
      if(this.player1Sets==2){
        this.gameOver(this.player1);
      }
    }
    else {
      setWinner = this.player2;
      ++this.player2Sets;
      if(this.player2Sets==2){
        this.gameOver(this.player2);
      }
    }
    
    this.player1.setScore(0);
    this.player2.setScore(0);
    
  }

  gameOver(winner){
    //modal match end
    console.log(winner.getName())
  }
}



