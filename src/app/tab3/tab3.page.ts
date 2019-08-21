import { GlossarioService } from './../services/glossario.service';
import { Glossario } from './../interfaces/glossario';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private loading: any; 
  public glossarios: Glossario = {};
  public glossario = new Array<Glossario>();
  public glossariosSubscription: Subscription;

  constructor(
    public glossarioService: GlossarioService,
    private authService: AuthService, 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public navtCtrl: NavController,
    public canActivate: AuthGuard ){
    this.glossariosSubscription = this.glossarioService.getGlossarios().subscribe(data => {
      this.glossario = data; 
    });
  }

  ngOnDestroy(){ this.glossariosSubscription.unsubscribe(); }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteProduct(id: string) {
    // item escolhido será excluído apenas se tiver sido criado pelo mesmo usuário;
    this.glossarios.userId = this.authService.getAuth().currentUser.uid; 

    try { await this.glossarioService.deleteGlossario(id); } 
    catch (error) { this.presentToast('Erro ao tentar deletar'); }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
