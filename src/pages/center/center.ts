import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawPage } from "../withdraw/withdraw";
import { DepositPage } from "../deposit/deposit";
import { AdmininfoPage } from "../admininfo/admininfo";
import { AgentPage } from "../agent/agent";
import { GamePage } from "../game/game";
import { SharePage } from "../share/share";
import { ChangeheaderPage } from "../changeheader/changeheader";
/**GamePage
 * Generated class for the CenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-center",
  templateUrl: "center.html"
})
export class CenterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  withdrawbtn(items) {
    this.navCtrl.push(WithdrawPage);
    console.log("okoko");
  }
  depositbtn(items) {
    this.navCtrl.push(DepositPage);
  }
  admininfobtn(items) {
    this.navCtrl.push(AdmininfoPage);
  }
  agentPagebtn(items) {
    this.navCtrl.push(AgentPage);
  }
  gamePagebtn(items) {
    this.navCtrl.push(GamePage);
  }
  sharePagebtn(items) {
    this.navCtrl.push(SharePage);
  }
  changeheaderbtn(items) {
    this.navCtrl.push(ChangeheaderPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad CenterPage");
  }
}
