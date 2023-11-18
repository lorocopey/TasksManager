import React from "react";
import { todoContext } from "../Contexts/todoContext";
import { CreateTodoButton } from "./CreateButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function TodoHeader() {
  const { searchValue, setSearchValue, openModal,
    setOpenModal } = React.useContext(todoContext);
  return (
    <div className="header">
      <h1>Todo App</h1>
      <div className="new-todo">
        <input
          name="todoname"
          type="text"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Add your new todo"
        />
        <CreateTodoButton>
          <div>+</div>
        </CreateTodoButton>

        {openModal && <Modal> <TodoForm/> </Modal>}
      </div>
    </div>
  );
}

export { TodoHeader };
