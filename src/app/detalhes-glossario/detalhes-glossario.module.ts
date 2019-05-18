import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesGlossarioPage } from './detalhes-glossario.page';

const routes: Routes = [
  { path: '', component: DetalhesGlossarioPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesGlossarioPage]
})
export class DetalhesGlossarioPageModule {}
