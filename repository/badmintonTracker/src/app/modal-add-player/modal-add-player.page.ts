import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable, ReplaySubject } from 'rxjs';
import { Player } from '../Interfaces/player';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-modal-add-player',
  templateUrl: './modal-add-player.page.html',
  styleUrls: ['./modal-add-player.page.scss'],
})
export class ModalAddPlayerPage{

  constructor(private modalCtrl: ModalController) { }

  uploadPlayer:Player = {'name':'','category':''};
  uid:string ='';


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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        this.uid = user.uid;
        this.uploadPlayer.user=this.uid;
    });
    if(this.uploadPlayer.name!='' && this.uploadPlayer.category!=''){
      await this.modalCtrl.dismiss(this.uploadPlayer);
    }
    else{
      alert("Name and Category can't be blank");
    }
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}
