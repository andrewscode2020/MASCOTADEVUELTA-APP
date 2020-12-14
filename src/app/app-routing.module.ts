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
import { StateComponent } from './components/state/state.component';
import { CityComponent } from './components/city/city.component';
import { CountryComponent } from './components/country/country.component';

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
    path: 'detalleMascota/:id',  // http://localhost:4200/casosFelices
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
  },
  {
    path: 'breeds/:petType', // http://localhost:4200/petType
    component: BreedComponent
  },
  {
    path: 'states/:country', // http://localhost:4200/country
    component: StateComponent
  },
  {
    path: 'cities/:state', // http://localhost:4200/state
    component: CityComponent
  },
  {
    path: 'countries', // http://localhost:4200/contries
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
