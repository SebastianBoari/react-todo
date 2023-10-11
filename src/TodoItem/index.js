import { CompleteIcon } from '../TodoIcon/Icons/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/Icons/DeleteIcon'

import './css/index.css'

function TodoItem (props) {
    return (
      <li className="todoList_item">
        <CompleteIcon 
          onComplete={props.onComplete}
          isCompleted={props.todo.completed}
        />

        <p className={`item_preview ${ props.todo.completed && "completed" }`}>{ props.todo.text }</p>

        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    )
}

export { TodoItem }