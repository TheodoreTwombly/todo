import { FC, useCallback } from 'react';
import { Todo, TodoAction } from '../../reducers/todoReducer';
import { TodoActionsTypes, Tab } from '../../constants';
import { Button, ControlGroupOption, RadioButton } from '@gravity-ui/uikit';

import './Filters.css';

interface FiltersProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  onTabChange: (tab: Tab) => void;
  activeTab?: Tab;
}

const options: ControlGroupOption<Tab>[] = Object.values(Tab).map((option) => ({
  value: option,
  content: option.charAt(0).toUpperCase() + option.slice(1),
}));

export const Filters: FC<FiltersProps> = ({
  todos,
  dispatch,
  onTabChange,
  activeTab,
}) => {
  const amountOfUncheckedItems = todos.filter((item) => !item.completed).length;

  const clearCompleted = useCallback(
    () =>
      dispatch({ type: TodoActionsTypes.CLEAR_COMPLETED_ITEMS, payload: {} }),
    [dispatch]
  );

  return (
    <div className="filtersWrapper">
      <div className="countTitle">{`${amountOfUncheckedItems} item${
        amountOfUncheckedItems > 1 ? 's' : ''
      } left`}</div>
      <div>
        <RadioButton
          defaultValue={options[0].value}
          options={options}
          value={activeTab}
          onUpdate={onTabChange}
        />
      </div>
      <Button className="button" view="flat" onClick={clearCompleted}>
        Clear completed
      </Button>
    </div>
  );
};
