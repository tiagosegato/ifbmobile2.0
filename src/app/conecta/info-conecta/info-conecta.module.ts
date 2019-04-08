import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoConectaPage } from './info-conecta.page';

const routes: Routes = [
  {
    path: '',
    component: InfoConectaPage,
    children:[
      {
        path:'',
        loadChildren:'',
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoConectaPage]
})
export class InfoConectaPageModule {}
