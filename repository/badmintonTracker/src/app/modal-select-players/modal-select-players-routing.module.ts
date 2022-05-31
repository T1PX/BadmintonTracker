import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSelectPlayersPage } from './modal-select-players.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSelectPlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSelectPlayersPageRoutingModule {}
