import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async redeSocial() { 
    const alert = await this.alertController.create({
      header: 'Redes Sociais: ',
      message: '<p>@IFBrasilia – Facebook</p> <p>@IFBRASILIA – Instagram</p> <p>IFBNotícias – Twitter</p> <p>TVIFB - no YouTube.</p>',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlert() { 
    const alert = await this.alertController.create({
      header: 'Desenvolvedores: ',
      message: '<p><strong>André Luiz </strong></p> <p><strong> Douglas Shibata </strong></p> <p><strong> Marcos Allysson </strong></p> <p><strong> Tiago Faccio </strong></p>',
      buttons: ['OK']
    });
    await alert.present();
  }
}
