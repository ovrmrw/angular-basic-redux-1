import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Dispatcher, Provider, ReducerContainer } from './common';
import { Action } from './actions';
import { incrementReducer, timestampReducer } from './reducers';


interface AppState {
  counter: number;
  timestamp: number | null;
}


const initialState: AppState = {
  counter: 0,
  timestamp: null
};


@Injectable()
export class Store {
  readonly provider$: Provider<AppState>;

  constructor(
    private dispatcher$: Dispatcher<Action>
  ) {
    this.provider$ = new BehaviorSubject(initialState);
    this.combineReducers();
  }


  private combineReducers(): void {
    ReducerContainer
      .zip<AppState>(...[
        incrementReducer(initialState.counter, this.dispatcher$),
        timestampReducer(initialState.timestamp, this.dispatcher$),

        (counter, timestamp): AppState => {
          return Object.assign<{}, AppState, {}>({}, initialState, { counter, timestamp });
        }
      ])
      .subscribe(newState => {
        console.log('newState:', newState);
        this.provider$.next(newState);
      });
  }


  getState(): Observable<AppState> {
    return this.provider$.asObservable();
  }

}