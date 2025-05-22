import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { employeelistGuard } from './employeelist.guard';

describe('employeelistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => employeelistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
