import React from "react";
import { todoContext } from "../Contexts/todoContext";

function TodoFooter() {
  const { completedTodos, totalTodos } = React.useContext(todoContext);

  let message = "";
  if (completedTodos === totalTodos) {
    message = "Tasks Completed";
  } else {
    message = `Tasks Complete ${completedTodos} of ${totalTodos}`;
  }

  return <div className="footer">{message}</div>;
}

export { TodoFooter };
