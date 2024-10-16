import { FC } from 'react';
import { Todo, TodoAction } from '../../reducers/todoReducer';
import { Item } from '../Item/Item';

import './ListOfItems.css';

interface ListOfitemsProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}
export const ListOfItems: FC<ListOfitemsProps> = ({ todos, dispatch }) => {
  return (
    <ul className="listWrapper">
      {todos.map((todo) => (
        <Item todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </ul>
  );
};
