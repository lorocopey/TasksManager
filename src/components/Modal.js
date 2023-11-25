import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "../components/TodoForm";

function Modal({ openModal,setOpenModal,addTodo}) {
  if (openModal) {
    return ReactDOM.createPortal(
      <div className="Modal">
        <TodoForm  openModal={openModal} setOpenModal={setOpenModal}  addTodo={addTodo} />
      </div>,
      document.getElementById("modal")
    );
  }
}

export { Modal };
