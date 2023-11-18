import React from "react";
import { todoContext } from "../Contexts/todoContext";

import "../css/todoform.css";

function TodoForm() {
  const { openModal, setOpenModal } = React.useContext(todoContext);
  return (
    <div class="overlay">
      <div class="contenedor">
        <button
          onClick={() => {
            openModal === false ? setOpenModal(true) : setOpenModal(false);
          }}
          className="cerrar"
        >
          X
        </button>
        <h1>Mi Div en el Centro</h1>
        <p>Este es un contenido de ejemplo en el div centrado.</p>
      </div>
    </div>
  );
}

export { TodoForm };
