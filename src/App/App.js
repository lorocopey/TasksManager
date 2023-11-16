import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppUI } from "./AppUI";
/* const defaultTodos = [
  { id: 0, task: "tarea 1", completed: true },
  { id: 1, task: "tarea 2", completed: true },
  { id: 2, task: "tarea 3", completed: false },
  { id: 3, task: "tarea 4", completed: false },
  { id: 4, task: "tarea 5", completed: false },
]; 

localStorage.setItem('todoAppV1',JSON.stringify(defaultTodos));*/
//localStorage.removeItem('todoAppV1');

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todoAppV1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const statusCounter = () => {
    if (completedTodos === totalTodos) {
      return "Tasks Completed";
    } else {
      return `Tasks Complete ${completedTodos} of ${totalTodos}`;
    }
  };

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
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      statusCounter={statusCounter}
      loading={loading}
      error={error}
    />
  );
}

export default App;
