import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoListComponent } from './motivo-list.component';

describe('MotivoListComponent', () => {
  let component: MotivoListComponent;
  let fixture: ComponentFixture<MotivoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
