import { TestBed } from '@angular/core/testing';

import { CmHeaderService } from './cm-header.service';

describe('CmHeaderService', () => {
  let service: CmHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
