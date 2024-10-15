import { FC, useCallback } from 'react';
import { Todo, TodoAction } from '../../reducer';
import { TodoActionsTypes } from '../../constants';

import './Item.css';
import { Button, Checkbox, Icon } from '@gravity-ui/uikit';
import { Xmark } from '@gravity-ui/icons';

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
      <div className="itemWrapper">
        <Checkbox
          className={completed ? 'checked label' : 'label'}
          content={title}
          size="l"
          checked={completed}
          onChange={toggleItem}
        />
        <Button
          view="flat"
          size="xs"
          className="deleteButton"
          onClick={removeItem}
        >
          <Icon data={Xmark} />
        </Button>
      </div>
    </li>
  );
};
