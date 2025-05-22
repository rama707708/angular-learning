import { CanActivateFn } from '@angular/router';

export const employeelistGuard: CanActivateFn = (route, state) => {

  const userRole=sessionStorage.getItem('role');
  if(userRole?.toLowerCase()=='admin'){
    return false;
  }
  return true;

};
