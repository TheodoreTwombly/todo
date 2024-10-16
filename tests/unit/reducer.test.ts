import { describe, expect, test } from 'vitest';
import { TodoActionsTypes } from '../../src/constants';
import { TodoAction, todoReducer } from '../../src/reducer';

describe('todoReducer', () => {
  test('Добавить задачу', () => {
    const initialState = [];
    const updateAction = {
      type: TodoActionsTypes.ADD_ITEM,
      payload: { title: 'milk' },
    };

    const updatedState = todoReducer(initialState, updateAction);
    expect(updatedState).toEqual([{ id: 1, title: 'milk', completed: false }]);
  });

  test('Удалить задачу', () => {
    const initialState = [];
    const addAction = {
      type: TodoActionsTypes.ADD_ITEM,
      payload: { title: 'milk' },
    };
    const removeAction = {
      type: TodoActionsTypes.REMOVE_ITEM,
      payload: { id: 1 },
    };

    const afterAddState = todoReducer(initialState, addAction);
    const afterRemoveState = todoReducer(afterAddState, removeAction);
    expect(afterRemoveState).toEqual([]);
  });

  test('Отметить задачу', () => {
    const initialState = [];
    const addAction = {
      type: TodoActionsTypes.ADD_ITEM,
      payload: { title: 'milk' },
    };
    const toggleAction = {
      type: TodoActionsTypes.TOGGLE_ITEM,
      payload: { id: 1 },
    };

    const afterAddState = todoReducer(initialState, addAction);
    const afterToggleState = todoReducer(afterAddState, toggleAction);
    expect(afterToggleState).toEqual([
      { id: 1, title: 'milk', completed: true },
    ]);
  });

  test('Очистить отмеченные задачи', () => {
    const initialState = [];
    const addAction = (title: string): TodoAction => ({
      type: TodoActionsTypes.ADD_ITEM,
      payload: { title: title },
    });
    const toggleAction = (id: number): TodoAction => ({
      type: TodoActionsTypes.TOGGLE_ITEM,
      payload: { id: id },
    });

    const clearAction = {
      type: TodoActionsTypes.CLEAR_COMPLETED_ITEMS,
      payload: {},
    };

    const afterFirstAddState = todoReducer(initialState, addAction('milk'));
    const afterSecondAddState = todoReducer(
      afterFirstAddState,
      addAction('bread')
    );
    const afterFirstToggleState = todoReducer(
      afterSecondAddState,
      toggleAction(1)
    );
    const afterSecondToggleState = todoReducer(
      afterFirstToggleState,
      toggleAction(2)
    );
    expect(afterSecondToggleState).toEqual([
      { id: 1, title: 'milk', completed: true },
      { id: 2, title: 'bread', completed: true },
    ]);
    const afterClearCompletedState = todoReducer(
      afterSecondToggleState,
      clearAction
    );
    expect(afterClearCompletedState).toEqual([
      { id: 1, title: 'milk', completed: false },
      { id: 2, title: 'bread', completed: false },
    ]);
  });
});
