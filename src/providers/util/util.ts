// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
@Injectable()
export class UtilProvider {
  public loader:any;
  constructor( public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  }
  // 确认提示弹窗
  showConfirm(ctx,callback) {
    let confirm = this.alertCtrl.create({
      title: '温馨提示',
      message: ctx,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '退出',
          handler: () => {
            callback && callback();
          }
        }
      ]
    });
    confirm.present();
  }
  // 信息弹窗
  showAlert(ctx,title) {
    let alert = this.alertCtrl.create({
      title: title?title:'温馨提示',
      subTitle: ctx?ctx:'获取信息失败，请重新获取',
      buttons: ['知道了']
    });
    alert.present();
  }
  // 显示loading
  showLoading(txt) {
     this.loader = this.loadingCtrl.create({
      content: txt,
      duration: 5000
    });
    this.loader.present();
  }
  //关闭loading
  dismiss(time){
    setTimeout(() => {
      this.loader.dismiss();
    }, time);
  }
}
