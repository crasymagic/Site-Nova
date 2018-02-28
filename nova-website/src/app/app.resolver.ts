import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataResolver implements Resolve<any> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
    return of({ res: 'I am data'});
  }
}

/**
 * An array of services to resolve routes with data.
 */
export const APP_RESOLVER_PROVIDERS: any[] = [
  DataResolver
];
