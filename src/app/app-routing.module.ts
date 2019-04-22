import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slides-boas-vindas', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'conecta', loadChildren: './conecta/conecta.module#ConectaPageModule' },
  { path: 'info-conecta', loadChildren: './conecta/info-conecta/info-conecta.module#InfoConectaPageModule' },
  { path: 'perfil-logado', loadChildren: './perfil-logado/perfil-logado.module#PerfilLogadoPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'publico', loadChildren: './ajuda/publico/publico.module#PublicoPageModule' },
  { path: 'entrar', loadChildren: './ajuda/entrar/entrar.module#EntrarPageModule' },
  { path: 'slides-boas-vindas', loadChildren: './slides-boas-vindas/slides-boas-vindas.module#SlidesBoasVindasPageModule' },  { path: 'mapa', loadChildren: './ajuda/mapa/mapa.module#MapaPageModule' },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
