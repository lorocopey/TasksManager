import React from "react";
import { TodoHeader } from "../components/TodoHeader";
import { TodoSearch } from "../components/TodoSearch";
import { TodoInputSearch } from "../components/TodoInputSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoModal } from "../components/TodoModal";
import { Modal } from "../components/Modal";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoFooter } from "../components/TodoFooter";
import { Loading } from "../components/Loading";
import { Errors } from "../components/Errors";
import { Empty } from "../components/Empty";
import {useTodos} from "../Contexts/useTodo";
import "../css/main.css";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo,
  } = useTodos() ;

  return (
    <>
      <div className="todo-app">
        <TodoHeader>
          <TodoSearch>
            <TodoInputSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <CreateTodoButton
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
            <TodoModal>
              <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                addTodo={addTodo}
              />
            </TodoModal>
          </TodoSearch>
        </TodoHeader>
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
        <TodoFooter completedTodos={completedTodos} totalTodos={totalTodos} />
      </div>
    </>
  );
}

export default App;
