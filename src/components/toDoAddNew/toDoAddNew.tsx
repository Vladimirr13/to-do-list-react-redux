import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IToDoItemType } from '../../types/toDoList';

const ToDoAddNew = () => {
  const dispatch = useDispatch();
  const [newToDoValue, setNewToDoValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewToDoValue(value);
  };
  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (newToDoValue !== '') {
      dispatch({
        type: IToDoItemType.ADD,
        payload: { id: Math.floor(Math.random() * 100), name: newToDoValue, check: false },
      });
      setNewToDoValue('');
    }
  };
  return (
    <div className="to-do-add-new">
      <h2>New todo</h2>
      <form className="to-do-add-new__search" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="new todo"
          onChange={(event) => handleChange(event)}
          value={newToDoValue}
        />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default ToDoAddNew;
