import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Dispatcher, Action, IncrementAction, TimeUpdateAction } from './store';


@Injectable()
export class AppService {
  constructor(
    private dispatcher$: Dispatcher<Action>,
    private http$: Http,
  ) { }


  increment(): void {
    setTimeout(() => {
      this.dispatcher$.next(new IncrementAction(1));
    }, 500);
  }


  decrement(): void {
    setTimeout(() => {
      this.dispatcher$.next(new IncrementAction(-1));
    }, 500);
  }


  timeUpdate(): void {
    this.http$
      .get('https://ntp-a1.nict.go.jp/cgi-bin/json')
      .map<number>(res => +(res.json().st) * 1000)
      .subscribe(timestamp => {
        this.dispatcher$.next(new TimeUpdateAction(timestamp));
      });
  }

}
