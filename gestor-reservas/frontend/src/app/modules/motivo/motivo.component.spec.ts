import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoComponent } from './motivo.component';

describe('MotivoComponent', () => {
  let component: MotivoComponent;
  let fixture: ComponentFixture<MotivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
