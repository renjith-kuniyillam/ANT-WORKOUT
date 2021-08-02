import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthGuardExampleService {
    canNavigateToDestination: boolean = false;

    setFlag(result : boolean) {
        this.canNavigateToDestination = result;
    }

    getFlag(): boolean {
        return this.canNavigateToDestination;
    }
}