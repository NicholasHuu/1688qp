import { RegisterPage } from "./../register/register";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ConfigProvider } from '../../providers/config/config';
import { UtilProvider } from '../../providers/util/util';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage:any;
  public create = {loginType:'BROWSER',password: '',username: ''}
  constructor(public navCtrl: NavController, public util: UtilProvider,public config: ConfigProvider, public httpService:HttpServicesProvider, public navParams: NavParams, public storage: StorageProvider) {
  }

  registerbtn(items){
    this.navCtrl.push(RegisterPage);
  }

  loginbtn(){
    // this.rootPage = TabsPage;
    if(this.checkCreate()){
      this.util.showLoading('loading...');
      this.httpService.requestPostData('/login', this.create, (res) => {
        var data = JSON.parse(res._body);
        if(data.code == '200') {
          this.navCtrl.push(HomePage);
          // this.rootPage = TabsPage;
          this.storage.set('firstIn', true);
        } else {
          console.log(data)
          this.util.showAlert(data.message,'温馨提示');
        }
        this.util.dismiss(100);
      })
    }
  }

  checkCreate () {
    if(this.create.username == '' || this.create.password == '' ) {
      this.util.showAlert('请填写正确填写信息！','温馨提示');
      return false;
    }
    return true;
  }
}
