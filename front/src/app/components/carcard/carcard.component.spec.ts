import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcardComponent } from './carcard.component';

describe('CarcardComponent', () => {
  let component: CarcardComponent;
  let fixture: ComponentFixture<CarcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
