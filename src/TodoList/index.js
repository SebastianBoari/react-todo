import './css/index.css'

function TodoList(props) {
  return (
    <article className="main">
      <section className="todoList-container">
          <ul className="todoList">
            {props.children}
          </ul>
      </section>
    </article>
  )
} 

export { TodoList }
