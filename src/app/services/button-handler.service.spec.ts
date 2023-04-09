import { TestBed } from '@angular/core/testing';

import { ButtonHandlerService } from './button-handler.service';

describe('ButtonHandlerService', () => {
  let service: ButtonHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
