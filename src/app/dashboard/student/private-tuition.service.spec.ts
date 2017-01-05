/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivateTuitionService } from './private-tuition.service';

describe('PrivateTuitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateTuitionService]
    });
  });

  it('should ...', inject([PrivateTuitionService], (service: PrivateTuitionService) => {
    expect(service).toBeTruthy();
  }));
});
