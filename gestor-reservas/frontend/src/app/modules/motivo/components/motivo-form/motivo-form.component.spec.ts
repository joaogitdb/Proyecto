import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoFormComponent } from './motivo-form.component';

describe('MotivoFormComponent', () => {
  let component: MotivoFormComponent;
  let fixture: ComponentFixture<MotivoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
