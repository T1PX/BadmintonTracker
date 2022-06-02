import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditPlayerPageRoutingModule } from './modal-edit-player-routing.module';

import { ModalEditPlayerPage } from './modal-edit-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditPlayerPageRoutingModule
  ],
  declarations: [ModalEditPlayerPage]
})
export class ModalEditPlayerPageModule {}
