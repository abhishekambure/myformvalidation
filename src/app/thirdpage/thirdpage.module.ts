import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdpagePageRoutingModule } from './thirdpage-routing.module';

import { ThirdpagePage } from './thirdpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdpagePageRoutingModule
  ],
  declarations: [ThirdpagePage]
})
export class ThirdpagePageModule {}
