import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardExampleService } from 'src/app/shared/services/auth-guard-example.service';

@Component({
  selector: 'app-source-route',
  templateUrl: './source-route.component.html',
  styleUrls: ['./source-route.component.css']
})
export class SourceRouteComponent implements OnInit {

  constructor(private authGuardExampleService: AuthGuardExampleService,
    private router: Router) { }
  switchValue: boolean = false;

  ngOnInit(): void {
    this.switchValue = this.authGuardExampleService.getFlag();
  }

  switchChange($event) {
    this.authGuardExampleService.setFlag($event);
  }

  goToDestination() {
    this.router.navigate(['/routing-guard-example/destination-page']);
  }

}
