import { TestBed } from '@angular/core/testing';

import { AutoPascoaService } from './auto-pascoa.service';

describe('AutoPascoaService', () => {
  let service: AutoPascoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoPascoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
