import React, { useEffect, useState } from 'react';
import ToDoItem from './toDoItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IToDoItem } from '../../types/toDoList';

const ToDoList: React.FC = () => {
  const { toDoItems, toDoItemsSearch } = useTypedSelector((state) => state.toDoList);
  const [todoList, setTodoList] = useState<IToDoItem[] | []>([]);
  useEffect(() => {
    if (toDoItems && !toDoItemsSearch) {
      setTodoList(toDoItems);
    } else if (toDoItemsSearch !== null && toDoItemsSearch) {
      setTodoList(toDoItemsSearch);
    }
  }, [toDoItems, toDoItemsSearch]);
  return (
    <div className="to-do-list">
      {todoList.map((todo, index) => {
        return <ToDoItem key={`${todo.name}${index}`} todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
