import { FC, useCallback } from 'react';
import { Todo, TodoAction } from '../../reducer';
import { Tab } from '../../App';
import { TodoActionsTypes } from '../../constants';
import { Button } from '@gravity-ui/uikit';

import './Filters.css';

interface FiltersProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  onTabChange: (tab: Tab) => void;
  activeTab?: Tab;
}

export const Filters: FC<FiltersProps> = ({
  todos,
  dispatch,
  onTabChange,
  activeTab,
}) => {
  const amountOfUncheckedItems = todos.filter((item) => !item.completed).length;
  const howMuchLeftTitle =
    amountOfUncheckedItems > 1
      ? `${amountOfUncheckedItems} items left`
      : `${amountOfUncheckedItems} item left`;

  const cleareCompleted = useCallback(
    () =>
      dispatch({ type: TodoActionsTypes.CLEAR_COMPLETED_ITEMS, payload: {} }),
    [dispatch]
  );

  return (
    <div className="filtersWrapper">
      <div className="todosCountTitle">{howMuchLeftTitle}</div>
      <div>
        <Button
          className="button"
          view="flat"
          onClick={() => onTabChange('all')}
          selected={activeTab === 'all'}
        >
          All
        </Button>
        <Button
          className="button"
          view="flat"
          onClick={() => onTabChange('active')}
          selected={activeTab === 'active'}
        >
          Active
        </Button>
        <Button
          className="button"
          view="flat"
          onClick={() => onTabChange('completed')}
          selected={activeTab === 'completed'}
        >
          Completed
        </Button>
      </div>
      <Button className="button" view="flat" onClick={cleareCompleted}>
        Clear completed
      </Button>
    </div>
  );
};
