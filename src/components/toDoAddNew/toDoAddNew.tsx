import React from 'react';

const ToDoAddNew = () => {
  return (
    <div className="to-do-add-new">
      <h2>New todo</h2>
      <div className="to-do-add-new__search">
        <input type="text" placeholder="new todo" />
        <button>add todo</button>
      </div>
    </div>
  );
};

export default ToDoAddNew;
