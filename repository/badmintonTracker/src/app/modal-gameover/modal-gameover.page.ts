import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Match } from '../Interfaces/match';

@Component({
  selector: 'app-modal-gameover',
  templateUrl: './modal-gameover.page.html',
  styleUrls: ['./modal-gameover.page.scss'],
})
export class ModalGameoverPage implements OnInit {
  match:Match;

  constructor(private modalCtrl: ModalController) { }

  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
