import { Glossario } from './../interfaces/glossario';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GlossarioService } from '../services/glossario.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-glossario',
  templateUrl: './detalhes-glossario.page.html',
  styleUrls: ['./detalhes-glossario.page.scss'],
})
export class DetalhesGlossarioPage implements OnInit {
  private loading: any;
  public glossario: Glossario = {};
  public glossarioId: string = null;
  public glossarioSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public activeRoute: ActivatedRoute, 
    public glossarioService: GlossarioService
  ){
    this.glossarioId = this.activeRoute.snapshot.params['id'];
    if (this.glossarioId) this.loadGlossario();
  }

  ngOnInit() { }
  ngOnDestroy(){ if (this.glossarioSubscription) this.glossarioSubscription.unsubscribe(); }
  
  loadGlossario(){ 
    this.glossarioSubscription = this.glossarioService.getGlossario(this.glossarioId).subscribe(data => {
      this.glossario = data;
    });
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
