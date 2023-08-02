import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyvaultPageRoutingModule } from './keyvault-routing.module';

import { KeyvaultPage } from './keyvault.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyvaultPageRoutingModule
  ],
  declarations: [KeyvaultPage]
})
export class KeyvaultPageModule {}
