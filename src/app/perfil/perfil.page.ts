import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  constructor() { }
   private navCtrl: NavController

  ngOnInit() {
  }
  login(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }
}
