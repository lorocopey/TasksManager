import React from "react";
import { todoContext } from "../Contexts/todoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(todoContext);
  return (
    <button
      onClick={() => {
        openModal === false ? setOpenModal(true) : setOpenModal(false);
      }}
      className="new-button"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
