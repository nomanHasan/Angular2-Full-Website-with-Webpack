/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnlockedTuitionService } from './unlocked-tuition.service';

describe('UnlockedTuitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnlockedTuitionService]
    });
  });

  it('should ...', inject([UnlockedTuitionService], (service: UnlockedTuitionService) => {
    expect(service).toBeTruthy();
  }));
});
