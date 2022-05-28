import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-punto',
  templateUrl: './modal-punto.page.html',
  styleUrls: ['./modal-punto.page.scss'],
})
export class ModalPuntoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  async close(rallyEnd:string){
    await this.modalCtrl.dismiss(rallyEnd);
  }
  ngOnInit() {
  }

}
