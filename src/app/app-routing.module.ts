import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
//import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'slides-boas-vindas', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'detalhes/:id', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'perfil-logado', loadChildren: './perfil-logado/perfil-logado.module#PerfilLogadoPageModule' }, // canActivate: [AuthGuard]
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'publico', loadChildren: './ajuda/publico/publico.module#PublicoPageModule' },
  { path: 'entrar', loadChildren: './ajuda/entrar/entrar.module#EntrarPageModule' },
  { path: 'slides-boas-vindas', loadChildren: './slides-boas-vindas/slides-boas-vindas.module#SlidesBoasVindasPageModule' },
  { path: 'mapa', loadChildren: './ajuda/mapa/mapa.module#MapaPageModule' },
  { path: 'detalhes-glossario', loadChildren: './detalhes-glossario/detalhes-glossario.module#DetalhesGlossarioPageModule' },
  { path: 'detalhes-glossario/:id', loadChildren: './detalhes-glossario/detalhes-glossario.module#DetalhesGlossarioPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'certificacao', loadChildren: './ajuda/certificacao/certificacao.module#CertificacaoPageModule' },

  { path: 'sobre', loadChildren: './ajuda/sobre/sobre.module#SobrePageModule' },
  { path: 'desenvolvedores', loadChildren: './desenvolvedores/desenvolvedores.module#DesenvolvedoresPageModule' },
  { path: 'rede-social', loadChildren: './ajuda/rede-social/rede-social.module#RedeSocialPageModule' },
  { path: 'horario', loadChildren: './ajuda/horario/horario.module#HorarioPageModule' },

  { path: 'tipos', loadChildren: './ajuda/tipos/tipos.module#TiposPageModule' },
  { path: 'modtec', loadChildren: './ajuda/modtec/modtec.module#ModtecPageModule' },
  { path: 'modsup', loadChildren: './ajuda/modsup/modsup.module#ModsupPageModule' },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
