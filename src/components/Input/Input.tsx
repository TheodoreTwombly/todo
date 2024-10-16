import { FC, useCallback } from 'react';
import { TodoActionsTypes } from '../../constants';
import { TodoAction } from '../../reducers/todoReducer';
import { TextInput } from '@gravity-ui/uikit';

interface InputProps {
  dispatch: React.Dispatch<TodoAction>;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ dispatch, placeholder }) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const target = e.target as HTMLInputElement;
        const value = target.value.trim();

        if (!value) return;

        dispatch({
          type: TodoActionsTypes.ADD_ITEM,
          payload: { title: value },
        });

        target.value = '';
      }
    },
    [dispatch]
  );

  return (
    <TextInput placeholder={placeholder} size="xl" onKeyDown={handleKeyDown} />
  );
};
