import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( 
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ){ }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
