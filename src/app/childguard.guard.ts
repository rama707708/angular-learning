import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './userlist/candeactivate';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class childguard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}