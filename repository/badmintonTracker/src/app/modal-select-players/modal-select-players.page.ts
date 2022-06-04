import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Player } from '../Interfaces/player';

@Component({
  selector: 'app-modal-select-players',
  templateUrl: './modal-select-players.page.html',
  styleUrls: ['./modal-select-players.page.scss'],
})
export class ModalSelectPlayersPage {
  players:Observable<any[]>;
  rivalName:string;
  selectedPlayer:Player;

  constructor(private afd:AngularFireDatabase, private modalCtrl: ModalController) {
    this.players = this.afd.list(JSON.parse(localStorage.getItem('user')).uid).valueChanges();
  }

  async close(){
    if(this.selectedPlayer.name!='' && this.rivalName!=''){
      await this.modalCtrl.dismiss({myPlayer:this.selectedPlayer,myRival:this.rivalName});
    }
    else{
      alert("Input both players data");
    }
  }
  async closeCancel(){
    await this.modalCtrl.dismiss();
  }

  addRivalName(ev){
    this.rivalName=ev.target.value;
  }

  compareWith(o1: Player, o2: Player) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }
}
