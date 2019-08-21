import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsGlossarioPage } from './details-glossario.page';

const routes: Routes = [
  { path: '', component: DetailsGlossarioPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsGlossarioPage]
})
export class DetailsGlossarioPageModule {}
