/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TuitionService } from './tuition.service';

describe('TuitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuitionService]
    });
  });

  it('should ...', inject([TuitionService], (service: TuitionService) => {
    expect(service).toBeTruthy();
  }));
});
