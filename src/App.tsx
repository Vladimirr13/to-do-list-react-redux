import React from 'react';
import ToDoSearch from './components/toDoSearch';
import ToDoList from './components/toDoList';
import ToDoAddNew from './components/toDoAddNew';

function App() {
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ToDoSearch />
      <ToDoList />
      <ToDoAddNew />
    </div>
  );
}

export default App;
