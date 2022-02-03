import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SecoundPageRoutingModule } from './secound-routing.module';
import { SecoundPage } from './secound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecoundPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SecoundPage]
})
export class SecoundPageModule {

  

}
