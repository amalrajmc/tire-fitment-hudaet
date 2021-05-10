import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireFitmentComponent } from './tire-fitment.component';

describe('TireFitmentComponent', () => {
  let component: TireFitmentComponent;
  let fixture: ComponentFixture<TireFitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireFitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireFitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
