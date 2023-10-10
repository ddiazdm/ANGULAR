import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CuadrosComponent } from './pages/cuadros/cuadros.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'cuadros',
        pathMatch: 'full',
      },
      {
        path: 'cuadros',
        component: CuadrosComponent,
      },
      {
        path: 'camisetas',
        component: CamisetasComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
