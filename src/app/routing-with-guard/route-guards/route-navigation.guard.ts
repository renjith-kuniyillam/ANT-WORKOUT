import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Observable } from "rxjs";
import { AuthGuardExampleService } from '../../shared/services/auth-guard-example.service';

@Injectable({
    providedIn: 'root'
})
export class RouteNavigationGuard implements CanActivate {
    constructor(private authGuardExampleService :AuthGuardExampleService, private notification: NzNotificationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authGuardExampleService.getFlag()) {
            return true;
        } else  {
            this.notification.create(
                'error',
                'Dont have access',
                'You will not be able to access the destination page'
              );
            return false;
        }
    }
}