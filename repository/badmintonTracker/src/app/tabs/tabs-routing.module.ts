import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'detail-player',
        loadChildren: () => import('../detail-player/detail-player.module').then(m => m.DetailPlayerPageModule)
      },
      {
        path: 'match-detail',
        loadChildren: () => import('../match-detail/match-detail.module').then(m => m.MatchDetailPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
