import { Component } from '@angular/core';
import { Player } from '../Interfaces/player';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ngOnInit(){
    //Traer lista de jugadores
  }

  uploadPlayer:Player;

  onFileChange(ev){
    this.uploadPlayer.photo=(ev.target.files[0]);
  }
  onNameChange(ev){
    this.uploadPlayer.name=(ev.target.value);
  }
  onCategoryChange(ev){
    this.uploadPlayer.category=(ev.target.value);
  }
  submitForm(){
    //POST uploadPlayer
    console.log(this.uploadPlayer);
    //refresh
  }

}
