import { Curso } from './../interfaces/curso';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})

export class DetalhesPage implements OnInit { 
  private curso: Curso = {};
  private cursoId: string = null;
  private cursoSubscription: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private cursoService: CursoService
  ){
    this.cursoId = this.activeRoute.snapshot.params['id'];
    if (this.cursoId) this.loadCurso();
  }

  loadCurso(){
    this.cursoSubscription = this.cursoService.getCurso(this.cursoId).subscribe(data => {
      this.curso = data;
    });
  }

  ngOnDestroy(){ if (this.cursoSubscription) this.cursoSubscription.unsubscribe(); }

  ngOnInit() { }

}
