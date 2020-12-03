import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos las rutas:
import { HomeComponent } from './components/home/home.component';
import { BuscaTuMascotaComponent } from './components/busca-tu-mascota/busca-tu-mascota.component';
import { ReportaUnaMascotaComponent } from './components/reporta-una-mascota/reporta-una-mascota.component';
import { CasosFelicesComponent } from './components/casos-felices/casos-felices.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { DetalleMascotaComponent } from './components/detalle-mascota/detalle-mascota.component';
import { BreedComponent } from './components/breed/breed.component';

const routes: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',  // http://localhost:4200/home
    component: HomeComponent
  },
  {
    path: 'buscaTuMascota',  // http://localhost:4200/buscaTuMasreportaUnaMascota
    component: BuscaTuMascotaComponent
  },
  {
    path: 'reportaUnaMascota',  // http://localhost:4200/reportaUnaMascota
    component: ReportaUnaMascotaComponent
  },
  {
    path: 'casosFelices',  // http://localhost:4200/casosFelices
    component: CasosFelicesComponent
  },
  {
    path: 'detalleMascota',  // http://localhost:4200/casosFelices
    component: DetalleMascotaComponent
  },
  {
    path: 'ingresa',  // http://localhost:4200/ingresa
    component: IngresaComponent
  },
  {
    path: 'registrate',  // http://localhost:4200/registrate
    component: RegistrateComponent
  },
  {
    path: 'breeds', // http://localhost:4200/breeds
    component: BreedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { BuscaTuMascotaComponent } from './componentes/busca-tu-mascota/busca-tu-mascota.component';
// import { CasosFelicesComponent } from './componentes/casos-felices/casos-felices.component';
// import { HomeComponent } from './componentes/home/home.component';
// import { IngresaComponent } from './componentes/ingresa/ingresa.component';
// import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
// import { RegistrateComponent } from './componentes/registrate/registrate.component';
// import { ReportaUnaMascotaComponent } from './componentes/reporta-una-mascota/reporta-una-mascota.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'buscaTuMascota',
//     component: BuscaTuMascotaComponent
//   },
//     {
//     path: 'reportaUnaMascota',
//     component: ReportaUnaMascotaComponent
//   },
//   {
//     path: 'casosFelices',
//     component: CasosFelicesComponent
//   },
//     {
//     path: 'ingresa',
//     component: IngresaComponent
//   },
//   {
//     path: 'registrate',
//     component: RegistrateComponent
//   },
//   {
//     path: '**',
//     component: PaginaNoEncontradaComponent
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }