import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,

    
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,

    ],
  exports: [HeaderComponent, NavbarComponent, FooterComponent],
})

export class LayoutModule { }
