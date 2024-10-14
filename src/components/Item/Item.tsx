import { FC, useCallback } from 'react';
import { Todo, TodoAction } from '../../reducer';
import { TodoActionsTypes } from '../../constants';

import './Item.css';

interface ItemProps {
  todo: Todo;
  dispatch: React.Dispatch<TodoAction>;
}
export const Item: FC<ItemProps> = ({ todo, dispatch }) => {
  const { title, completed, id } = todo;

  const toggleItem = useCallback(
    () => dispatch({ type: TodoActionsTypes.TOGGLE_ITEM, payload: { id } }),
    [dispatch, id]
  );

  const removeItem = useCallback(
    () => dispatch({ type: TodoActionsTypes.REMOVE_ITEM, payload: { id } }),
    [dispatch, id]
  );

  return (
    <li>
      <div>
        <input type="checkbox" checked={completed} onChange={toggleItem} />
        <span className={completed ? 'checked' : 'uncheked'}>{title}</span>
        <button onClick={removeItem}>X</button>
      </div>
    </li>
  );
};
