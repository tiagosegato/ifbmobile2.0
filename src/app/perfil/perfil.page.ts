import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  constructor(
    public navCtrl: NavController
   ) { }

  ngOnInit() {
  }
  
  login(){
    this.navCtrl.navigateForward('/perfil-logado');
  }
}
