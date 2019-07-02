import { CursoService } from './../../services/curso.service';
import { Curso } from './../../interfaces/curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit { 
  private cursoId: string = null;
  public curso: Curso = {};
  private loading: any;
  private cursoSubscription: Subscription;

  constructor(
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) { 
    this.cursoId = this.activatedRoute.snapshot.params['id'];

    if (this.cursoId) this.loadcurso();
  }

  ngOnInit() { }

  ngOnDestroy() { if (this.cursoSubscription) this.cursoSubscription.unsubscribe(); }

  async logout() {
    await this.presentLoading();
    
    try { await this.authService.logout(); this.navCtrl.navigateForward('/perfil'); } 
    catch (error) { console.error(error); } 
    finally { this.loading.dismiss(); }
  }

  loadcurso() {
    this.cursoSubscription = this.cursoService.getCurso(this.cursoId).subscribe(data => { 
      this.curso = data;
    });
  }

  async salvarCurso() {
    await this.presentLoading(); 

    this.curso.userId = this.authService.getAuth().currentUser.uid;

    if (this.cursoId) {
      try {
        await this.cursoService.updateCurso(this.cursoId, this.curso);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab2');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } 
    else {
      try {
        await this.cursoService.addCurso(this.curso);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab2');
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