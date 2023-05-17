import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonOrRegisComponent } from './logon-or-regis.component';

describe('LogonOrRegisComponent', () => {
  let component: LogonOrRegisComponent;
  let fixture: ComponentFixture<LogonOrRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonOrRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonOrRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
