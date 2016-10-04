import { Injectable } from '@angular/core';

import { Dispatcher, Action, IncrementAction } from './store';


@Injectable()
export class AppService {
  constructor(
    private dispatcher$: Dispatcher<Action>
  ) { }


  increment() {
    setTimeout(() => {
      this.dispatcher$.next(new IncrementAction(1));
    }, 500);
  }

}