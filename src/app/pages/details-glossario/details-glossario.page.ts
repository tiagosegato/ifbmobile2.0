import { Glossario } from './../../interfaces/glossario';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlossarioService } from 'src/app/services/glossario.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details-glossario',
  templateUrl: './details-glossario.page.html',
  styleUrls: ['./details-glossario.page.scss'],
})
export class DetailsGlossarioPage implements OnInit {
  private glossarioId: string = null;
  public glossario: Glossario = {};
  private loading: any;
  private glossarioSubscription: Subscription;

  constructor(
    private glossarioService: GlossarioService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) { 
    this.glossarioId = this.activatedRoute.snapshot.params['id'];

    if (this.glossarioId) this.loadGlossario();
  }

  ngOnInit() { }

  ngOnDestroy() { if (this.glossarioSubscription) this.glossarioSubscription.unsubscribe(); }

  async logout() {
    await this.presentLoading();
    
    try { await this.authService.logout(); this.navCtrl.navigateForward('/perfil'); } 
    catch (error) { console.error(error); } 
    finally { this.loading.dismiss(); }
  }

  loadGlossario() {
    this.glossarioSubscription = this.glossarioService.getGlossario(this.glossarioId).subscribe(data => { 
      this.glossario = data;
    });
  }

  async salvarglossario() {
    await this.presentLoading(); 

    this.glossario.userId = this.authService.getAuth().currentUser.uid;

    if (this.glossarioId) {
      try {
        await this.glossarioService.updateGlossario(this.glossarioId, this.glossario);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab3');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } 
    else {
      try {
        await this.glossarioService.addGlossario(this.glossario);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab3');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
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


