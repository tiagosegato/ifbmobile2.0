import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.page.html',
  styleUrls: ['./conecta.page.scss'],
})
export class ConectaPage implements OnInit {

  constructor(  
     private navCtrl: NavController
    ) { }

  ngOnInit() {
  }
  irParaInfoConecta(){
    this.navCtrl.navigateForward('/info-conecta');
  }
}
