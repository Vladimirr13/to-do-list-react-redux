import React from 'react';
import ToDoItem from './toDoItem';

const ToDoList: React.FC = () => {
  return (
    <div className="to-do-list">
      <ToDoItem />
    </div>
  );
};

export default ToDoList;
