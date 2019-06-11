import { GlossarioService } from './../services/glossario.service';
import { Glossario } from './../interfaces/glossario';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public glossario = new Array<Glossario>();
  public glossariosSubscription: Subscription;

  constructor(
    public glossarioService: GlossarioService ){
    this.glossariosSubscription = this.glossarioService.getGlossarios().subscribe(data => {
      this.glossario = data; 
    });
  }

  ngOnDestroy(){ this.glossariosSubscription.unsubscribe(); }

}
