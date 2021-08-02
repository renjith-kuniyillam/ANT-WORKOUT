import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponentComponent } from './destination-component/destination-component.component';
import { RouteNavigationGuard } from './route-guards/route-navigation.guard';
import { SourceRouteComponent } from './source-route/source-route.component';


const appRoutes: Routes = [
    {
        path: 'source-page',
        component: SourceRouteComponent
    },
    {
        path: 'destination-page',
        component: DestinationComponentComponent,
        canActivate: [RouteNavigationGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class RoutingWithGuardRoutingModule { }