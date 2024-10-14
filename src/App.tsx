import { useMemo, useReducer, useState } from 'react';
import { todoReducer } from './reducer';

import { Input } from './components/Input/Input';
import { ListOfItems } from './components/ListOfItems/ListOfItems';
import { Filters } from './components/Filters/Filters';

import './App.css';

export type Tab = 'all' | 'active' | 'completed';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [tab, setTab] = useState<Tab>('all');

  const filteredItems = useMemo(
    () =>
      todos.filter((item) => {
        if (tab === 'active') {
          return !item.completed;
        }
        if (tab === 'completed') {
          return item.completed;
        }
        return item;
      }),
    [tab, todos]
  );

  const handleTabChange = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className="wrapper">
      <h1 className="title">todos</h1>
      <section>
        <Input dispatch={dispatch} placeholder={'What needs to be done?'} />
        <ListOfItems todos={filteredItems} dispatch={dispatch} />
        <Filters
          todos={filteredItems}
          dispatch={dispatch}
          onTabChange={handleTabChange}
          activeTab={tab}
        />
      </section>
    </div>
  );
}

export default App;
