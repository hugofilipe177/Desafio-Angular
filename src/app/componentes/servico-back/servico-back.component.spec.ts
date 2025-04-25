import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoBackComponent } from './servico-back.component';

describe('ServicoBackComponent', () => {
  let component: ServicoBackComponent;
  let fixture: ComponentFixture<ServicoBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
