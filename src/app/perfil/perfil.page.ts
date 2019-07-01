import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {}; 
  private loading: any; 

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
   ) { }

  ngOnInit() { }
  
  async login() {
    await this.presentLoading();

    try { await this.authService.login(this.userLogin); this.navCtrl.navigateForward('/tab2'); } 
    catch (error) { this.presentToast(error.message); } 
    finally { this.loading.dismiss(); }
  }

  async register() {
    await this.presentLoading();

    try { await this.authService.register(this.userRegister); } 
    catch (error) { this.presentToast(error.message); } 
    finally { this.loading.dismiss(); }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }


}
