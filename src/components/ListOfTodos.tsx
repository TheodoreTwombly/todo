import { FC } from 'react';
import { Todo, TodoAction } from '../reducer';
import { Item } from './Item';

interface ListOfTodosProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}
export const ListOfTodos: FC<ListOfTodosProps> = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </ul>
  );
};
