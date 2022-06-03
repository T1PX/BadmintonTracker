import { Component, OnChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { Player } from '../Interfaces/player';
import { ModalAddPlayerPage } from '../modal-add-player/modal-add-player.page';
import { LoginPage } from '../login/login.page';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { Match } from '../Interfaces/match';
import { Router } from '@angular/router';
import { DataService } from '../shared/data-service';
import { Stats } from '../Interfaces/stats';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnChanges{
  players:Observable<any[]>;
  selectedPlayer:Player;

  constructor(private modalCtrl: ModalController, private afd:AngularFireDatabase, private router: Router, private dataService:DataService) {
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
      if(res.data!='cancel'){
        const ref = this.afd.list(getAuth().currentUser.uid).push(res.data);
        this.afd.list(getAuth().currentUser.uid).update(ref.key,{'ref':ref.key})
        
      }
    });
  }

  goDetail(pl:Player){
    this.dataService.selectedPlayer=pl;
    this.dataService.selectedPlayer.totalStats = this.dataService.setPerStats(this.dataService.selectedPlayer.totalStats);
    this.dataService.selectedPlayer.totalStatsAgainst = this.dataService.setPerStats(this.dataService.selectedPlayer.totalStatsAgainst);
    this.router.navigate(['/tabs/tabs/detail-player']);
  }

}
