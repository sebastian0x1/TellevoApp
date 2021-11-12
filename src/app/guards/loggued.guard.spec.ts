import { TestBed } from '@angular/core/testing';

import { LogguedGuard } from './loggued.guard';

describe('LogguedGuard', () => {
  let guard: LogguedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogguedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
