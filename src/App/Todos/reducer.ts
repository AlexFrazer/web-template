import { v4 } from 'uuid';
import { handleAction, reduceReducers } from 'redux-ts-utils';
import * as actions from './actions';

export interface State {
  readonly todos: Dictionary<Todo>;
}

export const initialState: State = {
  todos: {},
};

export default reduceReducers<State>(
  [
    handleAction(actions.addTodo, (state, { payload }) => {
      if (payload) {
        const id = v4();
        state.todos[id] = {
          ...payload,
          id,
          dateCreated: Date.now(),
        };
      }
    }),
    handleAction(actions.deleteTodo, (state, { payload }) => {
      if (payload) {
        delete state.todos[payload];
      }
    }),
    handleAction(actions.clearTodos, state => {
      state.todos = {};
    }),
  ],
  initialState,
);
