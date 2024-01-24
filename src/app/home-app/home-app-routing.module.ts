import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAppPage } from './home-app.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAppPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAppPageRoutingModule {}
