import { FC, useCallback } from 'react';
import { Todo, TodoAction } from '../../reducer';
import { Tab } from '../../App';
import { TodoActionsTypes } from '../../constants';

interface FiltersProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  onTabChange: (tab: Tab) => void;
}

export const Filters: FC<FiltersProps> = ({ todos, dispatch, onTabChange }) => {
  const amountOfUncheckedItems = todos.filter((item) => !item.completed).length;
  let howMuchLeftTitle = '';
  if (amountOfUncheckedItems && amountOfUncheckedItems > 1) {
    howMuchLeftTitle = `${amountOfUncheckedItems} items left`;
  } else {
    howMuchLeftTitle = `${amountOfUncheckedItems} item left`;
  }

  const cleareCompleted = useCallback(
    () =>
      dispatch({ type: TodoActionsTypes.CLEAR_COMPLETED_ITEMS, payload: {} }),
    [dispatch]
  );

  return (
    <div>
      {Boolean(amountOfUncheckedItems) && howMuchLeftTitle}
      <div>
        <button onClick={() => onTabChange('all')}>All</button>
        <button onClick={() => onTabChange('active')}>Active</button>
        <button onClick={() => onTabChange('completed')}>Completed</button>
      </div>
      <button onClick={cleareCompleted}>Clear completed</button>
    </div>
  );
};
