import { TestBed } from '@angular/core/testing';

import { MyEcommFormService } from './my-ecomm-form.service';

describe('MyEcommFormService', () => {
  let service: MyEcommFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEcommFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
