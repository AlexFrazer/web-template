import { createAction } from 'redux-ts-utils';

export const addTodo = createAction<Omit<Todo, 'id' | 'dateCreated'>>(
  'todos/ADD',
);
export const deleteTodo = createAction<string>('todos/DELETE');
export const clearTodos = createAction('todos/CLEAR');
