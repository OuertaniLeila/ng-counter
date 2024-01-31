import { Action, createReducer, on } from '@ngrx/store';
import { changeText, customDecrement, customIncrement, decrement, increment, reset } from './counter.action';
import { CounterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 2,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 10,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state , action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(customDecrement , (state, action)=> {
    return {
      ...state,
      counter : state.counter - action.count
    }
  }),
  on(changeText , (state) => {
    return {
      ...state,
      channelName : "Text Changed"
    }
  })
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
