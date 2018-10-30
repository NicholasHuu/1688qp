import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankbindPage } from "../bankbind/bankbind";
/**
 * Generated class for the BanklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-banklist",
  templateUrl: "banklist.html"
})
export class BanklistPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  bankbindbtn(items) {
    this.navCtrl.push(BankbindPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad BanklistPage");
  }
}
