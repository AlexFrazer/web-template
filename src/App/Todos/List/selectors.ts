import { createSelector } from 'reselect';
import { AppState } from 'src/reducer';

export const selectTodos = createSelector(
  (state: AppState) => state.todos.todos,
  todos => Object.values(todos),
);
