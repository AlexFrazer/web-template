import * as React from 'react';
import { clearTodos, deleteTodo } from '../actions';
import AddTodo from './AddTodo';

export interface Props {
  readonly todos: ReadonlyArray<Todo>;
  readonly deleteTodo: typeof deleteTodo;
  readonly clearTodos: typeof clearTodos;
}

export default function List({ todos, clearTodos }: Props) {
  return (
    <div>
      <h1>TO DO</h1>
      <ol>
        {todos.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ol>
      <AddTodo />
      <button onClick={clearTodos}>Clear List</button>
    </div>
  );
}
