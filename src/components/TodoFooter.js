import React from "react";

function TodoFooter({ completedTodos, totalTodos }  ) {
  let message = "";
  if (completedTodos === totalTodos) {
    message = "Tasks Completed";
  } else {
    message = `Tasks Complete ${completedTodos} of ${totalTodos}`;
  }

  return <div className="footer">{message}</div>;
}

export { TodoFooter };
