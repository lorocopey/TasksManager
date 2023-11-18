import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../Contexts/todoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
