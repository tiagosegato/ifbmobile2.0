import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesBoasVindasPage } from './slides-boas-vindas.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesBoasVindasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlidesBoasVindasPage]
})
export class SlidesBoasVindasPageModule {}
