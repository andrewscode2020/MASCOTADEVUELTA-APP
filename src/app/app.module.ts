import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import fontawesome from '@fortawesome/fontawesome';

// import { AppRoutingModule } from './app-routing.module';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscaTuMascotaComponent } from './components/busca-tu-mascota/busca-tu-mascota.component';
import { ReportaUnaMascotaComponent } from './components/reporta-una-mascota/reporta-una-mascota.component';
import { CasosFelicesComponent } from './components/casos-felices/casos-felices.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { RegistrateComponent } from './components/registrate/registrate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaTuMascotaComponent,
    ReportaUnaMascotaComponent,
    CasosFelicesComponent,
    IngresaComponent,
    RegistrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
