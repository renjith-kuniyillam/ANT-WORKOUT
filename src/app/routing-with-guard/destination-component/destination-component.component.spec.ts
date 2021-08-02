import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationComponentComponent } from './destination-component.component';

describe('DestinationComponentComponent', () => {
  let component: DestinationComponentComponent;
  let fixture: ComponentFixture<DestinationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
