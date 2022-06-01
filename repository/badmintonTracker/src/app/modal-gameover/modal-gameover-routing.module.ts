import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGameoverPage } from './modal-gameover.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGameoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGameoverPageRoutingModule {}
