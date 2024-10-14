import { useReducer } from 'react';
import { todoReducer } from './reducer';

import './App.css';
import { Input } from './components/Input';
import { ListOfTodos } from './components/ListOfTodos';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <h1>todos</h1>
      <Input dispatch={dispatch} placeholder={'What needs to be done?'} />
      <ListOfTodos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
