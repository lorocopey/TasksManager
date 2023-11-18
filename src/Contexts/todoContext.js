import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const todoContext = React.createContext();

function TodoProvider({children}) {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todoAppV1", []);
  const [searchValue, setSearchValue] = React.useState("");

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

  return (
    <todoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        completedTodos,
        totalTodos,
        loading,
        error,
      }}
    >
      {children}
    </todoContext.Provider>


  );
}



export { todoContext, TodoProvider };
