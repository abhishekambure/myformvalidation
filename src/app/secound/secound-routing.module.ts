import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecoundPage } from './secound.page';

const routes: Routes = [
  {
    path: '',
    component: SecoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecoundPageRoutingModule {}
