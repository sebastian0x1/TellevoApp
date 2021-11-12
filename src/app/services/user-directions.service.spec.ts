import { TestBed } from '@angular/core/testing';

import { UserDirectionsService } from './user-directions.service';

describe('UserDirectionsService', () => {
  let service: UserDirectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDirectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
