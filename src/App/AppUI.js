import { TodoHeader } from "../components/TodoHeader";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoFooter } from "../components/TodoFooter";
import { Loading } from "../components/Loading";
import { Errors } from "../components/Errors";
import { Empty } from "../components/Empty";
import { todoContext } from "../Contexts/todoContext";
import "../css/main.css";
import React from "react";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(todoContext);
  return (
    <>
      <div className="todo-app">
        <TodoHeader />
        <TodoList>
          {loading && <Loading />}
          {error && <Errors />}
          {!loading && searchedTodos.length === 0 && <Empty />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>
        <TodoFooter />
      </div>
    </>
  );
}

export { AppUI };
