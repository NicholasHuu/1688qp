import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WechatdepositPage } from "../wechatdeposit/wechatdeposit";
import { AlipayscanerPage } from "../alipayscaner/alipayscaner";
import { MeituanscanerPage } from "../meituanscaner/meituanscaner";
import { AlipayzhuanPage } from "../alipayzhuan/alipayzhuan";
import { WangyinzhuanPage } from "../wangyinzhuan/wangyinzhuan";

/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-deposit",
  templateUrl: "deposit.html"
})
export class DepositPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  wechatdepositbtn(items) {
    this.navCtrl.push(WechatdepositPage);
  }
  alipayscanerbtn(items) {
    this.navCtrl.push(AlipayscanerPage);
  }
  meituanscaner(items) {
    this.navCtrl.push(MeituanscanerPage);
  }
  alipayzhuanbtn(items) {
    this.navCtrl.push(AlipayzhuanPage);
  }
  wangyinzhuanbtn(items) {
    this.navCtrl.push(WangyinzhuanPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad DepositPage");
  }
}
