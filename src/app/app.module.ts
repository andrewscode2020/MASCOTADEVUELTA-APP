import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaTuMascotaComponent,
    ReportaUnaMascotaComponent,
    CasosFelicesComponent,
    IngresaComponent,
    RegistrateComponent,
    DetalleMascotaComponent,
    BreedComponent,
    StateComponent,
    CityComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
