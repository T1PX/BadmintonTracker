import { AfterViewInit, Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Player } from '../Interfaces/player';
import { ModalEditPlayerPage } from '../modal-edit-player/modal-edit-player.page';
import { DataService } from '../shared/data-service';
@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.page.html',
  styleUrls: ['./detail-player.page.scss'],
})
export class DetailPlayerPage implements OnInit  {

  constructor(public dataService:DataService, private router:Router, private modalCtrl: ModalController, private afd: AngularFireDatabase) { }
  deviceSize:number;
  ngOnInit() {
    this.deviceSize=(window.innerWidth)/2;
  }

  goMatchDetail(match){
    this.dataService.selectedMatch=match;
      this.router.navigate(['/tabs/tabs/match-detail']);
  }

  async editPlayer(pl){
    const modal = this.modalCtrl.create({
      component: ModalEditPlayerPage
    });
    (await modal).present();
    (await modal).onDidDismiss().then(async (res) => {
      if(res.data!='cancel' && res.data!='delete'){
        this.afd.list(getAuth().currentUser.uid).update(pl.ref,{'name':pl.name,'category':pl.category})
        if(pl.photo){this.afd.list(getAuth().currentUser.uid).update(pl.ref,{'photo':pl.photo})}
      }
      else if(res.data=='delete'){
        this.afd.list(getAuth().currentUser.uid).remove(pl.ref);
        this.router.navigate(['/tabs/tabs/tab2']);
      }
    });
  }
}
