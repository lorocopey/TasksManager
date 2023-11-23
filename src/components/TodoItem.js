import {Trash} from './Trash'

function TodoItem(props) {
  return (
    <li>
      <button  onClick={props.onComplete} className={`complete ${props.completed ? "complete--complete" : ""}`}>
        &#10003;
      </button>
      <span>{props.task}</span>
      <button onClick={props.onDelete} className="delete"> <Trash/> </button>
    </li>
  );
}

export { TodoItem };
