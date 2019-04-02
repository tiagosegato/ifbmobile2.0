import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public glossario: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ){
    this.loadData();
  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get('http://localhost:3000/Glossario');
    data.subscribe(result => {
      this.glossario = result;
    });
  }

}
