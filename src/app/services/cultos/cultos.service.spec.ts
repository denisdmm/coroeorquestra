import { TestBed } from '@angular/core/testing';

import { CultosService } from './cultos.service';

describe('CultosService', () => {
  let service: CultosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CultosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
