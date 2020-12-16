import { TestBed } from '@angular/core/testing';

import { ReporequestService } from './reporequest.service';

describe('ReporequestService', () => {
  let service: ReporequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
