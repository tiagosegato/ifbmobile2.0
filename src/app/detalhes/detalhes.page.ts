import { Curso } from './../interfaces/curso';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../services/curso.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})

export class DetalhesPage implements OnInit { 
  public curso: Curso = {};
  public cursoId: string = null;
  private loading: any;
  public cursoSubscription: Subscription;

  constructor(
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ){
    this.cursoId = this.activatedRoute.snapshot.params['id'];
    if (this.cursoId) this.loadCurso();
  }

  ngOnInit() { }

  ngOnDestroy(){ if (this.cursoSubscription) this.cursoSubscription.unsubscribe(); }

  loadCurso(){
    this.cursoSubscription = this.cursoService.getCurso(this.cursoId).subscribe(data => {
      this.curso = data;
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
