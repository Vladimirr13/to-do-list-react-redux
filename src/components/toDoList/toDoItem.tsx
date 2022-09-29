import React, { useState } from 'react';
import { IToDoItem, IToDoItemType } from '../../types/toDoList';
import { useDispatch } from 'react-redux';
interface IToDoItemProps {
  todo: IToDoItem;
}

const ToDoItem: React.FC<IToDoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [editToDoValue, setEditToDoValue] = useState<string>(todo.name);

  const [toDoMode, setToDoMode] = useState<string>('view');

  const handleSetMode = (mode: string, id?: number): void => {
    setToDoMode(mode);
    if (mode === IToDoItemType.DELETE && id !== undefined) {
      dispatch({ type: IToDoItemType.DELETE, payload: { id } });
    }
    if (mode === IToDoItemType.CHECK && id !== undefined) {
      dispatch({ type: IToDoItemType.CHECK, payload: { id } });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditToDoValue(value);
  };
  const handleSaveToDo = (id: number): void => {
    dispatch({ type: IToDoItemType.EDIT, payload: { id, name: editToDoValue, check: false } });
  };
  return (
    <div className={`to-do-item ${toDoMode}`}>
      {toDoMode !== IToDoItemType.EDIT ? (
        <div className="to-do-item__name">
          {todo.check ? (
            <s>
              <b>{todo.name}</b>
            </s>
          ) : (
            <b>{todo.name}</b>
          )}
        </div>
      ) : (
        <div className="to-do-item__edit">
          <input
            type="text"
            placeholder="edit todo"
            onChange={(event) => handleChange(event)}
            value={editToDoValue}
          />
          <button onClick={() => handleSaveToDo(todo.id)}>save</button>
        </div>
      )}
      <div className="to-do-item__tools">
        <div onClick={() => handleSetMode('delete', todo.id)}>Delete</div>
        <div onClick={() => handleSetMode('edit')}>Edit</div>
        <div onClick={() => handleSetMode('check', todo.id)}>Check</div>
      </div>
    </div>
  );
};

export default ToDoItem;
