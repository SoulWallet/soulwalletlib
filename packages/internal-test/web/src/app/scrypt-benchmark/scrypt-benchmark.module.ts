import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScryptBenchmarkPageRoutingModule } from './scrypt-benchmark-routing.module';

import { ScryptBenchmarkPage } from './scrypt-benchmark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScryptBenchmarkPageRoutingModule
  ],
  declarations: [ScryptBenchmarkPage]
})
export class ScryptBenchmarkPageModule {}
