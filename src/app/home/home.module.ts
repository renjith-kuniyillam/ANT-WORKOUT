import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.route.module';
import { DemoNgZorroAntdModule } from '../ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFieldsComponent } from './name-fields/name-fields.component';




@NgModule({
  declarations: [HomeComponent, NameFieldsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
