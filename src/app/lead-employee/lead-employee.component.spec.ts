import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadEmployeeComponent } from './lead-employee.component';

describe('LeadEmployeeComponent', () => {
  let component: LeadEmployeeComponent;
  let fixture: ComponentFixture<LeadEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
