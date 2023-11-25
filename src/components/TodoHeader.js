import React from "react";

function TodoHeader({ children }) {
  return (
    <div className="header">
      <h1>Todo App</h1>
      {children}
    </div>
  );
}

export { TodoHeader }
