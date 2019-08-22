import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    //{title: 'Feed',url: '/home',icon: 'home'}, // references home
    {title: 'Horário de Funcionamento do IFB',url: '/horario',icon: 'time'}, // references home
    {title: 'Redes Sociais',url: '/rede-social',icon: 'md-at'},
    {title: 'Sobre',url: '/sobre',icon: 'information'},
    {title: 'Desenvolvedores',url: '/desenvolvedores',icon: 'person'},
    {title: 'Administrativo',url: '/perfil',icon: 'cog'}
  ];
        
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
}
