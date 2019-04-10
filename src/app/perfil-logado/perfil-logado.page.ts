import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-logado',
  templateUrl: './perfil-logado.page.html',
  styleUrls: ['./perfil-logado.page.scss'],
})
export class PerfilLogadoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  sair(){
    this.navCtrl.navigateForward("");
  }
}
