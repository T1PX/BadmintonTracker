import { Component, OnChanges, OnInit } from '@angular/core';
import { Match } from '../Interfaces/match';
import { Player } from '../Interfaces/player';
import { ModalController } from '@ionic/angular'; 
import { ModalPuntoPage } from '../modal-punto/modal-punto.page';
import { Stats } from '../Interfaces/stats';
import { ModalSelectPlayersPage } from '../modal-select-players/modal-select-players.page';
import { ModalGameoverPage } from '../modal-gameover/modal-gameover.page';
import { getAuth } from 'firebase/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  

  constructor(private modalCtrl: ModalController, private afd: AngularFireDatabase) {}

  
  
  player1:Player;
  player2:Player;
  stats:Stats;
  statsAgainst:Stats;
  match:Match;
  date:string;
  set1Score:string;
  set2Score:string;
  set3Score:string;

  ngOnInit(){
    this.reset();
  }

  reset(){
    this.player1 = {'score':null,'sets':null,'name':null,'category':null,'ref':null,'matches':null};
    this.player2 = {'score':null,'sets':null,'name':null,'category':null,'ref':null,'matches':null};
    this.stats = new Stats(0,0,0,0,0,0);
    this.statsAgainst = new Stats(0,0,0,0,0,0);
    this.match = {'player':null,'playerRef':null,'fecha':null,'result':null,'rival':null,'stats':this.stats,'statsAgainst':this.statsAgainst,'winner':null};
    this.date = new Date().toISOString();
    this.set1Score='';
    this.set2Score='';
    this.set3Score='';
  }

  point(pl){
    this.showmodal(pl);
  }

  async showmodal(pl){
    const modal = this.modalCtrl.create({
      component: ModalPuntoPage,
      backdropDismiss: false
    });
    (await modal).present();
    (await modal).onDidDismiss().then((res) =>
     {
      if(res.data!='close' && pl==1){
        this.player1.score=(this.player1.score+21);
        this.addStat(this.match,res.data);
      }
      else if(res.data!='close' && pl==2){
        this.player2.score=(this.player2.score+1);
        this.addStatAgainst(this.match,res.data);
      }
      if((this.player1.score>=21 && (this.player1.score-this.player2.score)>2)
    ||  (this.player2.score>=21 && (this.player2.score-this.player1.score)>2)
    || (this.player1.score>29 || this.player2.score>29))
    {
      this.setOver()
    }
    });
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
    this.afd.list(getAuth().currentUser.uid).update(this.player1.ref,{'matches':this.player1.matches});
    this.showModalGameOver(this.match);
  }

  addStat(match:Match,result:string) {
    switch(result){
      case 'oppNonForcedError':{
          match.stats.oppNonForcedError++
        break;
      }
      case 'smash':{
        match.stats.smash++
        break;
      }
      case 'netPlay':{
        match.stats.netPlay++
        break;
      }
      case 'drop':{
        match.stats.drop++
        break;
      }
      case 'feint':{
        match.stats.feint++
        break;
      }
      case 'longCourt':{
        match.stats.longCourt++
        break;
      }
    }
  }

  addStatAgainst(match:Match,result:string) {
    switch(result){
      case 'oppNonForcedError':{
          match.statsAgainst.oppNonForcedError++
        break;
      }
      case 'smash':{
        match.statsAgainst.smash++
        break;
      }
      case 'netPlay':{
        match.statsAgainst.netPlay++
        break;
      }
      case 'drop':{
        match.statsAgainst.drop++
        break;
      }
      case 'feint':{
        match.statsAgainst.feint++
        break;
      }
      case 'longCourt':{
        match.statsAgainst.longCourt++
        break;
      }
    }
  }

  selectPlayers(){
    this.showModalSelectPlayers()
  }

  async showModalSelectPlayers(){
    const modal = this.modalCtrl.create({
      component: ModalSelectPlayersPage,
      backdropDismiss: false
    });
    (await modal).present();
    (await modal).onDidDismiss().then((res) => {
      if(!res.data.myPlayer.matches){
        res.data.myPlayer.matches = Array<Match>();
      }
      this.player1=res.data.myPlayer;
      this.player2.name=res.data.myRival;
      this.player1.score=0;
      this.player2.score=0;
      this.player1.sets=0;
      this.player2.sets=0;
      this.match.player=this.player1.name;
      this.match.playerRef=this.player1.ref;
      this.match.rival=this.player2.name;
    });
  }

  async showModalGameOver(match){
    const modal = this.modalCtrl.create({
      component: ModalGameoverPage,
      backdropDismiss: false,
      componentProps: { 
        match: match
      }
    });
    (await modal).present();
    (await modal).onDidDismiss().then((res) => {
      this.reset();
    });
  }
}
