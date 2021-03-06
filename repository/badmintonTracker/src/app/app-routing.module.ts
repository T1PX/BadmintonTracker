import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'modal-punto',
    loadChildren: () => import('./modal-punto/modal-punto.module').then( m => m.ModalPuntoPageModule)
  },
  {
    path: 'modal-add-player',
    loadChildren: () => import('./modal-add-player/modal-add-player.module').then( m => m.ModalAddPlayerPageModule)
  },
  {
    path: 'modal-select-players',
    loadChildren: () => import('./modal-select-players/modal-select-players.module').then( m => m.ModalSelectPlayersPageModule)
  },
  {
    path: 'modal-gameover',
    loadChildren: () => import('./modal-gameover/modal-gameover.module').then( m => m.ModalGameoverPageModule)
  },  {
    path: 'modal-edit-player',
    loadChildren: () => import('./modal-edit-player/modal-edit-player.module').then( m => m.ModalEditPlayerPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
