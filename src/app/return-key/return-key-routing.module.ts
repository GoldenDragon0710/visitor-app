import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnKeyPage } from './return-key.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnKeyPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnKeyPageRoutingModule {}
