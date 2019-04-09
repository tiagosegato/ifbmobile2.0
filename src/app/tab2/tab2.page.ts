import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public cursos: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ){
    this.loadData();
  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/Cursos');
    data.subscribe(result => {
      this.cursos = result;
    });
  }

  cursoClicado(){
     this.navCtrl.navigateForward('/detalhes:id'); // http://localhost:3000/Cursos' + cursoid 
    //alert("Id clicado: " + cursoid);
  }

}
