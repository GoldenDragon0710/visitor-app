import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentVisitorPage } from './current-visitor.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentVisitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentVisitorPageRoutingModule {}
