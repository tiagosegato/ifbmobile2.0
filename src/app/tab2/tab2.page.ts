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
  private cursos = new Array<Curso>();
  private cursosSubscription: Subscription;

  constructor(
    private cursoService: CursoService ){
    this.cursosSubscription = this.cursoService.getCursos().subscribe(data => {
      this.cursos = data; 
    });
  }

  ngOnDestroy(){ this.cursosSubscription.unsubscribe(); }

}
