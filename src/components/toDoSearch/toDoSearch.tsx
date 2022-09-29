import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IToDoItemType } from '../../types/toDoList';

const ToDoSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const querySearch = event.target.value;
    setValue(querySearch);
    dispatch({ type: IToDoItemType.SEARCH, payload: { name: querySearch } });
  };
  return (
    <div className="to-do-search">
      <input value={value} type="search" onChange={handleQuery} placeholder="search todo" />
    </div>
  );
};

export default ToDoSearch;
