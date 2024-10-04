import { TestBed } from '@angular/core/testing';

import { ReferentielService } from './referentiel.service';

describe('ReferentielService', () => {
  let service: ReferentielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferentielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
