import React from "react";

function useLocalStorage(itemName, initialvalue) {
  const [item, setItem] = React.useState(initialvalue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          parsedItem = [];
          localStorage.setItem(itemName, JSON.stringify(initialvalue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }, 2000);
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };


/* const defaultTodos = [
  { id: 0, task: "tarea 1", completed: true },
  { id: 1, task: "tarea 2", completed: true },
  { id: 2, task: "tarea 3", completed: false },
  { id: 3, task: "tarea 4", completed: false },
  { id: 4, task: "tarea 5", completed: false },
]; 

localStorage.setItem('todoAppV1',JSON.stringify(defaultTodos));*/
//localStorage.removeItem('todoAppV1');