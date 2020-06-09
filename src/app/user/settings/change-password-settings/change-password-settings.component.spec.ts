import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordSettingsComponent } from './change-password-settings.component';

describe('ChangePasswordSettingsComponent', () => {
  let component: ChangePasswordSettingsComponent;
  let fixture: ComponentFixture<ChangePasswordSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
