import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { OperatoriaPesosModule } from './operatoria-pesos/operatoria-pesos.module';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { CuentaService } from 'src/Servicios/cuenta.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    LayoutModule,
    PagesModule,
    OperatoriaPesosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParticlesModule,
    HttpClientModule,
],
  providers: [CuentaService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
  
})
export class AppModule { }
