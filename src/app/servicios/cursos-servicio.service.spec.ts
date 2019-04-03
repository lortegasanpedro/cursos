import { TestBed } from '@angular/core/testing';

import { CursosServicioService } from './cursos-servicio.service';

describe('CursosServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosServicioService = TestBed.get(CursosServicioService);
    expect(service).toBeTruthy();
  });
});
