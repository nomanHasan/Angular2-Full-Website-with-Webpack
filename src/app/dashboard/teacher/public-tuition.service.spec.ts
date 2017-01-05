/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicTuitionService } from './public-tuition.service';

describe('PublicTuitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicTuitionService]
    });
  });

  it('should ...', inject([PublicTuitionService], (service: PublicTuitionService) => {
    expect(service).toBeTruthy();
  }));
});
