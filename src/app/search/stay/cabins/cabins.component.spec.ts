import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsComponent } from './cabins.component';

describe('CabinsComponent', () => {
  let component: CabinsComponent;
  let fixture: ComponentFixture<CabinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
