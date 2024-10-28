import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleGridComponent } from './vehicle-grid.component';

describe('VehicleGridComponent', () => {
  let component: VehicleGridComponent;
  let fixture: ComponentFixture<VehicleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
