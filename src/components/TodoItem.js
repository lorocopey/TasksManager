function TodoItem(props) {
    return (
      <li>
        <span>{props.completed}</span>
        <p>{props.task}</p>
        <span>X</span>
      </li>
    );
  }

  export {TodoItem}