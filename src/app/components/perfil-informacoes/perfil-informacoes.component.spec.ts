import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInformacoesComponent } from './perfil-informacoes.component';

describe('PerfilInformacoesComponent', () => {
  let component: PerfilInformacoesComponent;
  let fixture: ComponentFixture<PerfilInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
