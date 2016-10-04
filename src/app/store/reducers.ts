import { Dispatcher, StateReducer } from './common';
import { Action, IncrementAction, TimeUpdateAction } from './actions';


export const incrementReducer: StateReducer<number> =
  (initState: number, dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<number>((state, action) => {
      if (action instanceof IncrementAction) {
        return state + action.num;
      } else {
        return state;
      }
    }, initState);


export const timestampReducer: StateReducer<number | null> =
  (initState: number | null, dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<number | null>((state, action) => {
      if (action instanceof TimeUpdateAction) {
        return action.timestamp;
      } else {
        return state;
      }
    }, initState);
