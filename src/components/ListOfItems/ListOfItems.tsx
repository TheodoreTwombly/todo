import { FC } from 'react';
import { Todo, TodoAction } from '../../reducer';
import { Item } from '../Item/Item';

interface ListOfitemsProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}
export const ListOfItems: FC<ListOfitemsProps> = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </ul>
  );
};
