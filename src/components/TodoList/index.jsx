import Task from '../TodoListItem'
import './index.css'

const TodoList = props => {
    const { todoList, deleteTask } = props

    return (
    <ul className="todos-container">
        {
            todoList.map(todo => {
                return (
                    <Task key={todo.id} taskDetails={todo} deleteTask={deleteTask} />
                )
            })
        }
    </ul>
    )
}

export default TodoList