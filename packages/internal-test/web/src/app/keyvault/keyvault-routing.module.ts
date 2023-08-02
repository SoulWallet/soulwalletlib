import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyvaultPage } from './keyvault.page';

const routes: Routes = [
  {
    path: '',
    component: KeyvaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyvaultPageRoutingModule {}
