import { useMemo, useReducer, useState } from 'react';
import { todoReducer } from './reducers/todoReducer';

import { Input } from './components/Input/Input';
import { ListOfItems } from './components/ListOfItems/ListOfItems';
import { Filters } from './components/Filters/Filters';

import './App.css';
import { Tab } from './constants';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [tab, setTab] = useState<Tab>(Tab.All);

  const filteredItems = useMemo(
    () =>
      todos.filter((item) => {
        if (tab === Tab.Active) {
          return !item.completed;
        }
        if (tab === Tab.Completed) {
          return item.completed;
        }
        return item;
      }),
    [tab, todos]
  );

  return (
    <article className="wrapper">
      <h1 className="title">todos</h1>
      <section>
        <Input dispatch={dispatch} placeholder={'What needs to be done?'} />
        <ListOfItems todos={filteredItems} dispatch={dispatch} />
        <Filters
          todos={filteredItems}
          dispatch={dispatch}
          onTabChange={setTab}
          activeTab={tab}
        />
      </section>
    </article>
  );
}

export default App;
