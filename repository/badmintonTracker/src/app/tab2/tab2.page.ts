import { Component } from '@angular/core';
import { ActionSheetController, IonRouterOutlet } from '@ionic/angular';
import { Player } from '../Interfaces/player';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public routerOutlet: IonRouterOutlet, private actionSheetCtrl: ActionSheetController) {}

  ngOnInit(){
    //Traer lista de jugadores
  }

  async canDismiss() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure you want to discard your changes?',
      buttons: [
        {
          text: 'Discard Changes',
          role: 'destructive'
        },
        {
          text: 'Keep Editing',
          role: 'cancel'
        }
      ]
    });
    
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    
    if (role === 'destructive') {
      return true;
    }

    return false;
  }

  uploadPlayer = new Player();

  onFileChange(ev){
    this.uploadPlayer.setPhoto(ev.target.files[0]);
  }
  onNameChange(ev){
    this.uploadPlayer.setName(ev.target.value);
  }
  onCategoryChange(ev){
    this.uploadPlayer.setCategory(ev.target.value);
  }
  submitForm(){
    //POST uploadPlayer
    console.log(this.uploadPlayer);
    //refresh
  }

}
