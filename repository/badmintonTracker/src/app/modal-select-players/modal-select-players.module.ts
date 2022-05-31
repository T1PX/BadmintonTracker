import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSelectPlayersPageRoutingModule } from './modal-select-players-routing.module';

import { ModalSelectPlayersPage } from './modal-select-players.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelectPlayersPageRoutingModule
  ],
  declarations: [ModalSelectPlayersPage]
})
export class ModalSelectPlayersPageModule {}
