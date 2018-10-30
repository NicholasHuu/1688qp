import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BanklistPage } from "../banklist/banklist";
import { ZijingpwdPage } from "../zijingpwd/zijingpwd";
import { ChangeloginpwdPage } from "../changeloginpwd/changeloginpwd";

/**
 * Generated class for the AdmininfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-admininfo",
  templateUrl: "admininfo.html"
})
export class AdmininfoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  banklistbtn(items) {
    this.navCtrl.push(BanklistPage);
  }
  zijingpwdbtn(items) {
    this.navCtrl.push(ZijingpwdPage);
  }
  changeloginpwdbtn(items) {
    this.navCtrl.push(ChangeloginpwdPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad AdmininfoPage");
  }
}
