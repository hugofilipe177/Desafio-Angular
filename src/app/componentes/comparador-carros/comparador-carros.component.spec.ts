import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorCarrosComponent } from './comparador-carros.component';

describe('ComparadorCarrosComponent', () => {
  let component: ComparadorCarrosComponent;
  let fixture: ComponentFixture<ComparadorCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparadorCarrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparadorCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
