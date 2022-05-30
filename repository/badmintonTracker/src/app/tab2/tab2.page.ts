import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { Player } from '../Interfaces/player';
import { ModalAddPlayerPage } from '../modal-add-player/modal-add-player.page';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  db:AngularFirestoreCollection<Player>;
  players:Array<Player>;
  uid:string='';

  constructor(private modalCtrl: ModalController, private afs:AngularFirestore, private authService: AuthenticationService) {
    
  }

  ngOnInit(){
    this.players = [];
    this.db = this.afs.collection<Player>('players', ref => ref.where('user','==',this.authService.userData.uid));
    this.getPlayers().then(res => res.subscribe(listP=> this.players = listP));
  }

async getPlayers(){
  return this.db.valueChanges();
}

  async addPlayer(){
    const modal = this.modalCtrl.create({
      component: ModalAddPlayerPage
    });
    (await modal).present();
    (await modal).onDidDismiss().then(async (res) => 
    await this.db.add(res.data));
  }

}
