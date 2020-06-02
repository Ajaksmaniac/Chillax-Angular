import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinosComponent } from './casinos.component';

describe('CasinosComponent', () => {
  let component: CasinosComponent;
  let fixture: ComponentFixture<CasinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
