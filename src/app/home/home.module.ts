import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeRoutingModule } from './routes.module';
import { SharedModule } from '../Shared/shared.module';
import { AboutComponent, ContactUsComponent, HomeComponent } from './pages';



@NgModule({
  declarations: [AboutComponent, ContactUsComponent, HomeComponent],
  imports: [
    HomeRoutingModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class HomeModule { }
