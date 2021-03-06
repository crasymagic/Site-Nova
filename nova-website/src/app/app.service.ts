import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  /**
   * Already return a clone of the current state.
   */
  public get state(): InternalStateType {
    return this._state = this._clone(this._state);
  }
  /**
   * Never allow mutation
   */
  public set state(value: InternalStateType) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any): any {
    /**
     * Use our state getter for the clone.
     */
    const state: any = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any): void {
    /**
     * Internally mutate our state.
     */
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType): any {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify( object ));
  }
}
