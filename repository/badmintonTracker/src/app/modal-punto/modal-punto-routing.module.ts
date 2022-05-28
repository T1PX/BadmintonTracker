import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPuntoPage } from './modal-punto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPuntoPageRoutingModule {}
