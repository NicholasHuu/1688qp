import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ConfigProvider } from '../../providers/config/config';
import { UtilProvider } from '../../providers/util/util';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public reg = {loginType:'BROWSER',password: '',username: ''}
  constructor(public navCtrl: NavController, public navParams: NavParams,public util: UtilProvider,public config: ConfigProvider, public httpService:HttpServicesProvider,) {}
  returnLoginbtn() {
    // let name = items.pagename?items.pagename:'详情页';
    this.navCtrl.push(LoginPage);
    // this.rootPage = TabsPage;
    console.log("222");
  }

  registerbtn(){
    if(this.checkCreate()){
      this.httpService.requestPostData('/login', this.reg, (res) => {
        console.log(res)
      })
      this.navCtrl.push(HomePage)
      // this.rootPage = TabsPage;
    }
  }

  checkCreate () {
    if(this.reg.username == '' || this.reg.password == '' ) {
    console.log(this.reg.username.length,this.reg.password.length)
      this.util.showAlert('请填写正确填写信息！','温馨提示');
      return false;
    }
    return true;
  }
}
