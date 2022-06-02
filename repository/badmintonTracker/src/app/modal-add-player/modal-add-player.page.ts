import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';
import { Match } from '../Interfaces/match';
import { Player } from '../Interfaces/player';

@Component({
  selector: 'app-modal-add-player',
  templateUrl: './modal-add-player.page.html',
  styleUrls: ['./modal-add-player.page.scss'],
})
export class ModalAddPlayerPage{

  constructor(private modalCtrl: ModalController) { }

  uploadPlayer:Player = {'name':'','category':'','ref':'','matches':Array<Match>()};


  addName(ev){
    this.uploadPlayer.name=ev.target.value;
  }
  addCategory(ev){
    this.uploadPlayer.category=ev.target.value;
  }
  addPhoto(ev){
    this.convertFile(ev.target.files[0]).subscribe(base64 => {
      this.uploadPlayer.photo = base64;
    });
  }

  async close(){
    if(this.uploadPlayer.name!='' && this.uploadPlayer.category!=''){
      await this.modalCtrl.dismiss(this.uploadPlayer);
    }
    else{
      alert("Name and Category can't be blank");
    }
  }
  async closeCancel(){
    await this.modalCtrl.dismiss('cancel');
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}
