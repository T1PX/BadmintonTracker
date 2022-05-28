import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPuntoPageRoutingModule } from './modal-punto-routing.module';

import { ModalPuntoPage } from './modal-punto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPuntoPageRoutingModule
  ],
  declarations: [ModalPuntoPage]
})
export class ModalPuntoPageModule {}
