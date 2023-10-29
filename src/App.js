import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateButton";

const defaultTodos = [
  { id:0, task: "tarea 1", completed: false },
  { id:1, task: "tarea 2", completed: false },
  { id:2, task: "tarea 3", completed: false },
  { id:3, task: "tarea 4", completed: false },
  { id:4, task: "tarea 5", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={17} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => {
          return(
          <TodoItem key={todo.id} task={todo.task} completed={todo.completed}/>
          )
        })}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
