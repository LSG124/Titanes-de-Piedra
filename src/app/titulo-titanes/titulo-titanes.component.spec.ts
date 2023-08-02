import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTitanesComponent } from './titulo-titanes.component';

describe('TituloTitanesComponent', () => {
  let component: TituloTitanesComponent;
  let fixture: ComponentFixture<TituloTitanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloTitanesComponent]
    });
    fixture = TestBed.createComponent(TituloTitanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
