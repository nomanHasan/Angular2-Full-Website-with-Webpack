/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppliedTuitionService } from './applied-tuition.service';

describe('AppliedTuitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppliedTuitionService]
    });
  });

  it('should ...', inject([AppliedTuitionService], (service: AppliedTuitionService) => {
    expect(service).toBeTruthy();
  }));
});
