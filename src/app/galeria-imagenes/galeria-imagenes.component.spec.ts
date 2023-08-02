import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaImagenesComponent } from './galeria-imagenes.component';

describe('GaleriaImagenesComponent', () => {
  let component: GaleriaImagenesComponent;
  let fixture: ComponentFixture<GaleriaImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaImagenesComponent]
    });
    fixture = TestBed.createComponent(GaleriaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
