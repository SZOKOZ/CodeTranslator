import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './routes.module';
import { SharedModule } from '../Shared/shared.module';
import { AboutComponent, ContactUsComponent, HomeComponent } from './pages';



@NgModule({
  declarations: [AboutComponent, ContactUsComponent, HomeComponent],
  imports: [
    HomeRoutingModule, SharedModule
  ]
})
export class HomeModule { }
