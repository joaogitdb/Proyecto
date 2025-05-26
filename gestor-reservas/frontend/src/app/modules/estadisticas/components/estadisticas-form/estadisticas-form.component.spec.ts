import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasFormComponent } from './estadisticas-form.component';

describe('EstadisticasFormComponent', () => {
  let component: EstadisticasFormComponent;
  let fixture: ComponentFixture<EstadisticasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadisticasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
