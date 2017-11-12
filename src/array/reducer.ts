import { Action } from '@ngrx/store';

import { Actions, FocusAction, UnfocusAction } from '../actions';
import { FormArrayState, isArrayState } from '../state';
import { disableReducer } from './reducer/disable';
import { enableReducer } from './reducer/enable';
import { markAsDirtyReducer } from './reducer/mark-as-dirty';
import { markAsPristineReducer } from './reducer/mark-as-pristine';
import { markAsSubmittedReducer } from './reducer/mark-as-submitted';
import { markAsTouchedReducer } from './reducer/mark-as-touched';
import { markAsUnsubmittedReducer } from './reducer/mark-as-unsubmitted';
import { markAsUntouchedReducer } from './reducer/mark-as-untouched';
import { resetReducer } from './reducer/reset';
import { setErrorsReducer } from './reducer/set-errors';
import { setUserDefinedPropertyReducer } from './reducer/set-user-defined-property';
import { setValueReducer } from './reducer/set-value';
import { childReducer } from './reducer/util';

export function formArrayReducerInternal<TValue>(state: FormArrayState<TValue>, action: Actions<TValue[]>) {
  if (!isArrayState(state)) {
    throw new Error('State must be array state');
  }

  switch (action.type) {
    case FocusAction.TYPE:
    case UnfocusAction.TYPE:
      return childReducer(state, action);
  }

  state = setValueReducer(state, action);
  state = setErrorsReducer(state, action);
  state = enableReducer(state, action);
  state = disableReducer(state, action);
  state = markAsDirtyReducer(state, action);
  state = markAsPristineReducer(state, action);
  state = markAsTouchedReducer(state, action);
  state = markAsUntouchedReducer(state, action);
  state = markAsSubmittedReducer(state, action);
  state = markAsUnsubmittedReducer(state, action);
  state = setUserDefinedPropertyReducer(state, action);
  state = resetReducer(state, action);

  return state;
}

export function formArrayReducer<TValue>(state: FormArrayState<TValue>, action: Action) {
  return formArrayReducerInternal(state, action as any);
}
