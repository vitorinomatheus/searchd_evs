import { TestBed } from '@angular/core/testing';

import { StoreUsuarioService } from './store-usuario.service';

describe('StoreUsuarioService', () => {
  let service: StoreUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
