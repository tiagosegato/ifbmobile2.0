import { Glossario } from './../interfaces/glossario';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GlossarioService } from '../services/glossario.service';

@Component({
  selector: 'app-detalhes-glossario',
  templateUrl: './detalhes-glossario.page.html',
  styleUrls: ['./detalhes-glossario.page.scss'],
})
export class DetalhesGlossarioPage implements OnInit {
  private glossario: Glossario = {};
  private glossarioId: string = null;
  private glossarioSubscription: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private glossarioService: GlossarioService
  ){
    this.glossarioId = this.activeRoute.snapshot.params['id'];
    if (this.glossarioId) this.loadGlossario();
  }

  loadGlossario(){ 
    this.glossarioSubscription = this.glossarioService.getGlossario(this.glossarioId).subscribe(data => {
      this.glossario = data;
    });
  }

  ngOnDestroy(){ if (this.glossarioSubscription) this.glossarioSubscription.unsubscribe(); }

  ngOnInit() { }

}
