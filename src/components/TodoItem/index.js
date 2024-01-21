// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {id, title} = todoList

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p className="title">{title}</p>
      <button type="button" className="delete-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
