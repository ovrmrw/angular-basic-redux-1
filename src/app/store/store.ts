import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Dispatcher, Provider, ReducerContainer } from './common';
import { Action, IncrementAction } from './actions';


interface AppState {
  counter: number;
}


const initialState: AppState = {
  counter: 0
};


@Injectable()
export class Store {
  readonly provider$: Provider<AppState>;

  constructor(
    private dispatcher$: Dispatcher<Action>
  ) {
    this.provider$ = new BehaviorSubject(initialState);

    ReducerContainer
      .zip<AppState>(...[
        this.dispatcher$.scan<number>((state, action) => {
          if (action instanceof IncrementAction) {
            return state + action.num;
          } else {
            return state;
          }
        }, initialState.counter),

        (counter) => {
          return Object.assign({}, initialState, { counter }) as AppState;
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