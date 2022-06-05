import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    private alertController: AlertController
  ) { }
  async ngOnInit() {
    const alert = await this.alertController.create({
      header: "Can't find it?",
      message: 'Be aware that the verification email may be on your spam',
      buttons: [
        {
          text: 'Got it',
          id: 'cancel-button'
        }
      ]
    });

    await alert.present();
  }
}