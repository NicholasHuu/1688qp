import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankbindPage } from './bankbind';

@NgModule({
  declarations: [
    BankbindPage,
  ],
  imports: [
    IonicPageModule.forChild(BankbindPage),
  ],
})
export class BankbindPageModule {}
