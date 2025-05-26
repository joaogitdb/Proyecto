import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasListComponent } from './estadisticas-list.component';

describe('EstadisticasListComponent', () => {
  let component: EstadisticasListComponent;
  let fixture: ComponentFixture<EstadisticasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadisticasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
