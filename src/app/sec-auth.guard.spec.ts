import {TestBed, inject} from '@angular/core/testing';
import {SecAuthGuard} from './sec-auth.guard';

describe('SecAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecAuthGuard]
    });
  });

  it('should ...', inject([SecAuthGuard], (guard: SecAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
