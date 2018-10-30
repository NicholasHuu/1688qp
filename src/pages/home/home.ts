import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { LoginPage } from '../login/login';
// import{ AdmininfoPage } from "../admininfo/admininfo"
// import { NewsPage } from '../news/news';
// import { TabsPage } from '../tabs/tabs';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // rootPage:any;
  constructor(public navCtrl: NavController) {}

  registerbtn(items) {
    // this.rootPage = TabsPage;
    // console.log(items)
    // let name = items.pagename?items.pagename:'详情页';
    // this.navCtrl.push(TabsPage)
  }
}

