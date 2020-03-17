import { TestBed } from '@angular/core/testing';

import { ComunicadoService } from './comunicado.service';

describe('ComunicadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicadoService = TestBed.get(ComunicadoService);
    expect(service).toBeTruthy();
  });
});
