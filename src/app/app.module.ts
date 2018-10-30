import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SharePage } from "../pages/share/share";
import { WithdrawPage } from "../pages/withdraw/withdraw";
import { CenterPage } from '../pages/center/center';
import { DepositPage } from "../pages/deposit/deposit";
import { WechatdepositPage } from "../pages/wechatdeposit/wechatdeposit";
import { AlipayscanerPage } from "../pages/alipayscaner/alipayscaner";
import { MeituanscanerPage } from "../pages/meituanscaner/meituanscaner";
import { AlipayzhuanPage } from "../pages/alipayzhuan/alipayzhuan";
import { WangyinzhuanPage } from "../pages/wangyinzhuan/wangyinzhuan";
import { AdmininfoPage } from "../pages/admininfo/admininfo";
import { ZijingpwdPage } from "../pages/zijingpwd/zijingpwd";
import { ChangeloginpwdPage } from "../pages/changeloginpwd/changeloginpwd";
import { BanklistPage } from "../pages/banklist/banklist";
import { AgentmanagementPage } from "../pages/agentmanagement/agentmanagement";
import { BankbindPage } from "../pages/bankbind/bankbind";
import { AgentPage } from "../pages/agent/agent";
import { ChangeheaderPage } from "../pages/changeheader/changeheader";
import { GamePage } from "../pages/game/game";
import { SubordinatemanagementPage } from "../pages/subordinatemanagement/subordinatemanagement";
import { RegisterPage } from "../pages/register/register";
import { PerformanceinquiryPage } from "../pages/performanceinquiry/performanceinquiry";
import { LoginPage } from '../pages/login/login';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { ConfigProvider } from '../providers/config/config';
import { UtilProvider } from '../providers/util/util';
import { HttpModule, JsonpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    LoginPage,
    RegisterPage,
    SharePage,
    WithdrawPage,
    AdmininfoPage,
    ZijingpwdPage,
    ChangeloginpwdPage,
    ChangeheaderPage,
    SubordinatemanagementPage,
    BanklistPage,
    BankbindPage,
    AgentPage,
    GamePage,
    DepositPage,
    WechatdepositPage,
    AlipayscanerPage,
    MeituanscanerPage,
    AlipayzhuanPage,
    WangyinzhuanPage,
    AgentmanagementPage,
    PerformanceinquiryPage,
    GamePage,
    CenterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true", //隐藏全部子页面tabs
      iconMode: "ios", //引用iOS的图标
      mode: "ios", //把平台设置成iOS的风格
      modalEnter: "modal-slide-in", //设置返回的动画效果
      modalLeave: "modal-slide-out", //设置返回的动画效果
      backButtonText: "" //设置返回按钮的文本
    })
    // IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    RegisterPage,
    LoginPage,
    SharePage,
    WithdrawPage,
    AdmininfoPage,
    ChangeheaderPage,
    ZijingpwdPage,
    ChangeloginpwdPage,
    BanklistPage,
    BankbindPage,
    AgentPage,
    GamePage,
    AgentmanagementPage,
    SubordinatemanagementPage,
    PerformanceinquiryPage,
    DepositPage,
    WechatdepositPage,
    AlipayscanerPage,
    MeituanscanerPage,
    AlipayzhuanPage,
    WangyinzhuanPage,
    GamePage,
    CenterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpServicesProvider,
    ConfigProvider,
    UtilProvider,
    StorageProvider
  ]
})
export class AppModule {}
