import React from "react";
import "../css/todoform.css";

function TodoForm({ openModal, setOpenModal,addTodo }) {
  return (
    <div className="overlay">
      <div className="contenedor">
        <button
          onClick={() => {
            openModal === false ? setOpenModal(true) : setOpenModal(false);
          }}
          className="cerrar"
        >
          X
        </button>
        <form onSubmit={(event)=>{
          event.preventDefault();
          addTodo(event.target.task.value)
          setOpenModal(false);
        }}>
          <h4>Add new task</h4>
          <input className="input-task" name="task" type="text" placeholder="Task name" />
          <button type="submit" className="save-task"> Save </button>
        </form>
      </div>
    </div>
  );
}

export { TodoForm };
