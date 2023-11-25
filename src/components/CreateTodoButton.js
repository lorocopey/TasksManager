import React from "react";

function CreateTodoButton({ openModal, setOpenModal }) {
  return (
    <>
      <button
        onClick={() => {
          openModal === false ? setOpenModal(true) : setOpenModal(false);
        }}
        className="new-button"
      >
        +
      </button>
      
    </>
  );
}

export { CreateTodoButton };
