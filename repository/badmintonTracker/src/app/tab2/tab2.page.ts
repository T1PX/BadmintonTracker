import { Component, OnChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { Player } from '../Interfaces/player';
import { ModalAddPlayerPage } from '../modal-add-player/modal-add-player.page';
import { LoginPage } from '../login/login.page';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnChanges{
  players:Observable<any[]>;

  constructor(private modalCtrl: ModalController, private afd:AngularFireDatabase) {
    this.players = this.afd.list(getAuth().currentUser.uid).valueChanges();
  }
  
  ngOnChanges(){
  }


  async addPlayer(){
    const modal = this.modalCtrl.create({
      component: ModalAddPlayerPage
    });
    (await modal).present();
    (await modal).onDidDismiss().then(async (res) => {
      if(res){
        this.afd.list(getAuth().currentUser.uid).push(res.data);
      }
    });
  }

}
