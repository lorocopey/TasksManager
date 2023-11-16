import React from "react";

function TodoHeader({searchValue,setSearchValue}) {
  
  return (
    <div className="header">
      <h1>Todo App</h1>
      <div className="new-todo">
        <input name="todoname"
          type="text"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
          placeholder="Add your new todo"
        />
        <button className="new-button">
          <div>+</div>
        </button>
      </div>
    </div>
  );
}

export { TodoHeader };
