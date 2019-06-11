import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desenvolvedores: ',
      message: '<p><strong>André Luiz </strong></p> <p><strong> Douglas Shibata </strong></p> <p><strong> Luiz Henrique </strong></p> <p><strong> Marcos Allysson </strong></p> <p><strong> Tiago Faccio </strong></p> <p><strong> Wendel Feliciano </strong></p>',
      buttons: ['OK']
    });
    await alert.present();
  }
}
