import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceRouteComponent } from './source-route/source-route.component';
import { DestinationComponentComponent } from './destination-component/destination-component.component';
import { DemoNgZorroAntdModule } from '../ng-zorro.module';
import { RoutingWithGuardRoutingModule } from './routing-with-guard.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteNavigationGuard } from './route-guards/route-navigation.guard';



@NgModule({
  declarations: [SourceRouteComponent, DestinationComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    RoutingWithGuardRoutingModule
  ],
  providers: [RouteNavigationGuard]
})
export class RoutingWithGuardModule { }
