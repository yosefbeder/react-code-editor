import { Reducer } from 'react';
import { Actions } from './constants';
import { PositionType } from './types';

interface HistoryRecordType {
  html: string;
  position: PositionType;
}

interface StateType {
  past: HistoryRecordType[];
  present: HistoryRecordType;
  future: HistoryRecordType[];
}

type ActionType =
  | { type: Actions.UNDO | Actions.REDO }
  | { type: Actions.RECORD; payload: HistoryRecordType };

const reducer: Reducer<StateType, ActionType> = (state, action) => {
  if (action.type === Actions.RECORD) {
    /*
      Recording history
        1. Push `present` to `past`.
        2. Set `present` to `action.payload`.
        3. Clear `future`.
    */

    return {
      past: [...state.past, state.present],
      present: action.payload,
      future: [],
    };
  }

  if (action.type === Actions.UNDO) {
    /*
      Undoing history
        1. If `past` isn't empty.
          1. Pop `past`.
          2. Set `present` to the popped value.
          3. Insert `present` to `future`.
    */

    if (state.past.length) {
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
      };
    }
  }

  if (action.type === Actions.REDO) {
    /*
      Redoing history
        1. If future isen't empty
          1. Push `present` to `past`.
          2. Set `present` to the first item of `future`.
          3. Remove the first item of `future`.
    */

    if (state.future.length) {
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1),
      };
    }
  }

  return state;
};

const initialState: StateType = {
  past: [],
  present: { html: '', position: { start: 0, end: 0 } },
  future: [],
};

export { initialState };
export default reducer;
