import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import ("./home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'routing-guard-example',
        loadChildren: () => import ("./routing-with-guard/routing-with-guard.module").then(m => m.RoutingWithGuardModule)
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }