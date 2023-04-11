import { TestBed } from '@angular/core/testing';

import { FormShowerService } from './form-shower.service';

describe('FormShowerService', () => {
  let service: FormShowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormShowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
