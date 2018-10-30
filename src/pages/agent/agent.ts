import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubordinatemanagementPage } from "../subordinatemanagement/subordinatemanagement";
import { PerformanceinquiryPage } from "../performanceinquiry/performanceinquiry";
import { AgentmanagementPage } from "../agentmanagement/agentmanagement";
/**
 * Generated class for the AgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-agent",
  templateUrl: "agent.html"
})
export class AgentPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  subordinatemanagementbtn(items) {
    this.navCtrl.push(SubordinatemanagementPage);
  }
  performanceinquirybtn(items) {
    this.navCtrl.push(PerformanceinquiryPage);
  }
  agentmanagement(items) {
    this.navCtrl.push(AgentmanagementPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad AgentPage");
  }
}
