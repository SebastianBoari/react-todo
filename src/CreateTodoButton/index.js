import { CreateIcon } from '../TodoIcon/Icons/CreateIcon'

import './css/index.css'

function CreateTodoButton({ openModal, setOpenModal }) {
    return (
      <section className="todo_add">
        <button className="todo_add-button" onClick={() => setOpenModal(!openModal)}>
          <CreateIcon/>
        </button>
      </section>

    )
  } 
  
export { CreateTodoButton }
