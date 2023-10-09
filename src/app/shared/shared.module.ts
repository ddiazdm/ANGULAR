import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignModule } from '../design/design.module';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { HeaderComponent } from './components/header/header.component';

// Design



@NgModule({

  declarations: [




    SidenavMenuComponent,
    HeaderComponent
  ],

  imports: [

    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DesignModule


  ],

  exports: [

    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DesignModule,
    SidenavMenuComponent,
    HeaderComponent


  ]

})

export class SharedModule { }
