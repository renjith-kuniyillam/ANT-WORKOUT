import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceRouteComponent } from './source-route.component';

describe('SourceRouteComponent', () => {
  let component: SourceRouteComponent;
  let fixture: ComponentFixture<SourceRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
