import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import todos, { State as TodosState } from './App/Todos/reducer';

export interface AppState {
  readonly router: RouterState;
  readonly todos: TodosState;
}

export default (history: History) =>
  combineReducers({
    todos,
    router: connectRouter(history),
  });
