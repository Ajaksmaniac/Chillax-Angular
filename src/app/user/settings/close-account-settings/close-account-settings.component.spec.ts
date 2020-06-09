import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAccountSettingsComponent } from './close-account-settings.component';

describe('CloseAccountSettingsComponent', () => {
  let component: CloseAccountSettingsComponent;
  let fixture: ComponentFixture<CloseAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
