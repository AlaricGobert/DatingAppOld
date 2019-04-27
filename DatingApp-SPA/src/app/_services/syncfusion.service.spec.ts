/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SyncfusionService } from './syncfusion.service';

describe('Service: Syncfusion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyncfusionService]
    });
  });

  it('should ...', inject([SyncfusionService], (service: SyncfusionService) => {
    expect(service).toBeTruthy();
  }));
});
