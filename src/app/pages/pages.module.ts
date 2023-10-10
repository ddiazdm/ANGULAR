import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { CuadrosComponent } from './cuadros/cuadros.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    MainComponent,
    CuadrosComponent,
    CamisetasComponent,
    ContactoComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
]
})
export class PagesModule { }
