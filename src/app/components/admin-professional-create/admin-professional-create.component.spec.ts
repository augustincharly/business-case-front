import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessionalCreateComponent } from './admin-professional-create.component';

describe('AdminProfessionalCreateComponent', () => {
  let component: AdminProfessionalCreateComponent;
  let fixture: ComponentFixture<AdminProfessionalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfessionalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessionalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
