import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { StorageProvider } from '../providers/storage/storage';

// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  // rootPage:any = TabsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: StorageProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    })
    // 默认打开首页
    // this.rootPage = TabsPage;
    // 判断是否登录
    if(this.storage.get('firstIn')) { 
      this.rootPage = TabsPage; 
    } else {
      this.rootPage = LoginPage;
    }
  }
}

