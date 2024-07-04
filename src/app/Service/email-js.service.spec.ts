import { TestBed } from '@angular/core/testing';

import { EmailJsService } from './email-js.service';

describe('EmailJsService', () => {
  let service: EmailJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
