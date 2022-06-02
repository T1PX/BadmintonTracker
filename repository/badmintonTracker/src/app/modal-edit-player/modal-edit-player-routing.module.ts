import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditPlayerPage } from './modal-edit-player.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditPlayerPageRoutingModule {}
