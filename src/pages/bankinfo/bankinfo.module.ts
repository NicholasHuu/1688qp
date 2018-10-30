import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankinfoPage } from './bankinfo';

@NgModule({
  declarations: [
    BankinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BankinfoPage),
  ],
})
export class BankinfoPageModule {}
