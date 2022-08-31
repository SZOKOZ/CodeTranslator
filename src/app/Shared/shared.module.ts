import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent } from './layout';
import { NgMaterialModule } from './material/material.module';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    NgMaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgMaterialModule
  ]
})
export class SharedModule { }
