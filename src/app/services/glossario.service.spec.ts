import { TestBed } from '@angular/core/testing';
import { GlossarioService } from './glossario.service';

describe('GlossarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlossarioService = TestBed.get(GlossarioService);
    expect(service).toBeTruthy();
  });
});