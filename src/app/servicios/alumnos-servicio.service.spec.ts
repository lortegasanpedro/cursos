import { TestBed } from '@angular/core/testing';

import { AlumnosServicioService } from './alumnos-servicio.service';

describe('AlumnosServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnosServicioService = TestBed.get(AlumnosServicioService);
    expect(service).toBeTruthy();
  });
});
