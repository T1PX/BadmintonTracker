import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';
import { Player } from '../Interfaces/player';
import { DataService } from '../shared/data-service';

@Component({
  selector: 'app-modal-edit-player',
  templateUrl: './modal-edit-player.page.html',
  styleUrls: ['./modal-edit-player.page.scss'],
})
export class ModalEditPlayerPage{

  constructor(private modalCtrl: ModalController, public dataService: DataService, private alertController: AlertController) { }


  uploadPlayer:Player = this.dataService.selectedPlayer;


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
  async closeDelete(){
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        message: 'Deleting a player is permanent and can not be undone.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button'
          }, {
            text: "I'm sure",
            id: 'confirm-button',
            handler: async () => {
              await this.modalCtrl.dismiss('delete');
            }
          }
        ]
      });
  
      await alert.present();
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}
