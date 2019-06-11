import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-conecta',
  templateUrl: './info-conecta.page.html',
  styleUrls: ['./info-conecta.page.scss'],
})
export class InfoConectaPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  sair(){
    this.navCtrl.navigateForward("");
  }
}
