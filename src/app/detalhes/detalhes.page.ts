import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  cursos:any;
  cursoid:number;
  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ){
    this.loadData();
  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/Cursos'+this.cursoid);
    data.subscribe(result => {
      this.cursos = result;
    });
  }
  ngOnInit() {
  }

}
