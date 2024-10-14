import { TodoActionsTypes } from './constants.ts';

export interface Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface TodoAction {
  type: TodoActionsTypes;
  payload: Todo;
}

export const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case TodoActionsTypes.ADD_ITEM:
      return state.concat({
        id: state.length + 1,
        title: action.payload.title,
        completed: false,
      });
    case TodoActionsTypes.REMOVE_ITEM:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TodoActionsTypes.TOGGLE_ITEM:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
};
