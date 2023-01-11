import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from './lateral/lateral.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LateralComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    LateralComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
