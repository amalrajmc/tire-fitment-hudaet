import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireModelsComponent } from './tire-models.component';

describe('TireModelsComponent', () => {
  let component: TireModelsComponent;
  let fixture: ComponentFixture<TireModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
