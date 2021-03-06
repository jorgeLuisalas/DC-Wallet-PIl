import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoPesosComponent } from './ingreso-pesos/ingreso-pesos.component';
import { RetiroPesosComponent } from './retiro-pesos/retiro-pesos.component';
import { GiroDescubiertoComponent } from './giro-descubierto/giro-descubierto.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IngresoPesosComponent,
    RetiroPesosComponent,
    GiroDescubiertoComponent,
    TransferenciasComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [IngresoPesosComponent, RetiroPesosComponent, GiroDescubiertoComponent, TransferenciasComponent]
})
export class OperatoriaPesosModule { }
