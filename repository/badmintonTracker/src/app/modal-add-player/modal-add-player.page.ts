import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';
import { Match } from '../Interfaces/match';
import { Player } from '../Interfaces/player';
import { Stats } from '../Interfaces/stats';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { popoverController } from '@ionic/core';

@Component({
  selector: 'app-modal-add-player',
  templateUrl: './modal-add-player.page.html',
  styleUrls: ['./modal-add-player.page.scss'],
})
export class ModalAddPlayerPage{

  constructor(private modalCtrl: ModalController) { }

  stats = new Stats(0,0,0,0,0,0,null);
  statsAgainst = new Stats(0,0,0,0,0,0,null);

  uploadPlayer:Player = {'name':'','category':'','ref':'','matches':Array<Match>(), 'totalStats':this.stats,'totalStatsAgainst':this.statsAgainst};


  addName(ev){
    this.uploadPlayer.name=ev.target.value;
  }
  
  addCategory(ev){
    this.uploadPlayer.category=ev.target.value;
  }

  async selectPhoto(){
      await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        presentationStyle: 'popover',
        source: CameraSource.Prompt,
        resultType: CameraResultType.Base64
      }).then(res=>{this.uploadPlayer.photo=res.base64String});
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
