import { CursoService } from './../services/curso.service';
import { Curso } from './../interfaces/curso';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cursos = new Array<Curso>();
  public cursosSubscription: Subscription;

  constructor(
    public cursoService: CursoService ){
    this.cursosSubscription = this.cursoService.getCursos().subscribe(data => {
      this.cursos = data; 
    });
  }

  ngOnDestroy(){ this.cursosSubscription.unsubscribe(); }

}
