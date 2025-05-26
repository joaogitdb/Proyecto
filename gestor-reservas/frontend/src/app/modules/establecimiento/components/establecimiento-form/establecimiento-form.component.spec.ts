import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoFormComponent } from './establecimiento-form.component';

describe('EstablecimientoFormComponent', () => {
  let component: EstablecimientoFormComponent;
  let fixture: ComponentFixture<EstablecimientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablecimientoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstablecimientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
