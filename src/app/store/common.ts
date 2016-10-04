import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class Dispatcher<T> extends Subject<T> {
  next(action) { super.next(action); }
}


export class Provider<T> extends Subject<T>{
  next(state) { super.next(state); }
}


export class ReducerContainer<T> extends Observable<T> {
}