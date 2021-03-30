import { TestBed } from '@angular/core/testing';

import { RanksService } from './ranks.service';

describe('RanksService', () => {
  let service: RanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
