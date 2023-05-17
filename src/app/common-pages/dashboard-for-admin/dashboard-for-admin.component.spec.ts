import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForAdminComponent } from './dashboard-for-admin.component';

describe('DashboardForAdminComponent', () => {
  let component: DashboardForAdminComponent;
  let fixture: ComponentFixture<DashboardForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
