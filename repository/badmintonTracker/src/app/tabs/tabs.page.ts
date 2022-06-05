import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public authenticationService: AuthenticationService, private alertController: AlertController) {}

  async logout(){

    const alert = await this.alertController.create({
      header: 'Do you want to log out from this account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button'
        }, {
          text: "Confirm",
          id: 'confirm-button',
          handler: () => {
            this.authenticationService.SignOut();
          }
        }
      ]
    });

    await alert.present();
  }

}
