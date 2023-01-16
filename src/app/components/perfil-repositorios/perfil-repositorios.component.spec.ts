import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRepositoriosComponent } from './perfil-repositorios.component';

describe('PerfilRepositoriosComponent', () => {
  let component: PerfilRepositoriosComponent;
  let fixture: ComponentFixture<PerfilRepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRepositoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
