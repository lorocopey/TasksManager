import React from "react";

function TodoInputSearch({ searchValue, setSearchValue }) {
  return (
    <input
      name="todoname"
      type="text"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Filter tasks"
    />
  );
}

export { TodoInputSearch };
