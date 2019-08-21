import { CursoService } from './../services/curso.service';
import { Curso } from './../interfaces/curso';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private loading: any; 
  public curso: Curso = {};
  public cursos = new Array<Curso>(); 
  public cursosSubscription: Subscription;

  constructor(
    private authService: AuthService, 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public cursoService: CursoService,
    public navtCtrl: NavController,
    public canActivate: AuthGuard
    ){
    this.cursosSubscription = this.cursoService.getCursos().subscribe(data => {
      this.cursos = data; 
    });
  }

  ngOnDestroy(){ this.cursosSubscription.unsubscribe(); }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteProduct(id: string) {
    // item escolhido será excluído apenas se tiver sido criado pelo mesmo usuário;
    this.curso.userId = this.authService.getAuth().currentUser.uid; 

    try { await this.cursoService.deleteCurso(id); } 
    catch (error) { this.presentToast('Erro ao tentar deletar'); }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}