import { TestBed, inject } from '@angular/core/testing';

import { BusinessRulesService } from './business-rules.service';

describe('BusinessRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessRulesService]
    });
  });

  it('should be created', inject([BusinessRulesService], (service: BusinessRulesService) => {
    expect(service).toBeTruthy();
  }));
});
