import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const todoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todoAppV1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    let todoTask = todo.task.toLowerCase();
    let taskSearch = searchValue.toLowerCase();
    return todoTask.includes(taskSearch);
  });

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (task) => {
    try {
      var newTodos = [...todos];
      //console.log(newTodos)
      // tengo que encontrar el ultimo id de los elementos guardados
      var lastElement = newTodos.reduce(function (
        objetoConMaxID,
        objetoActual
      ) {
        return objetoActual.id > objetoConMaxID.id
          ? objetoActual
          : objetoConMaxID;
      },
      newTodos[0]);

      if (!lastElement) {
        newTodos.push({ id: 1, task: task, completed: false });
        saveTodos(newTodos);
      } else {
        newTodos.push({ id: lastElement.id + 1, task: task, completed: false });
        saveTodos(newTodos);
      }
    } catch (error) {
      Error(error);
    }
  };

  return (
    <todoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        completedTodos,
        totalTodos,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

export { todoContext, TodoProvider };
