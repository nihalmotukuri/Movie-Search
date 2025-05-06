import { useState } from 'react'
import './index.css'

const AddTodo = props => {
    const { addTask } = props
    const [taskInput, setTaskInput] = useState('')
    const [taskDescrip, setTaskDescrip] = useState('')

    const onAddTodo = () => {
        const todo = {
            task: taskInput,
            description: taskDescrip
        }

        addTask(todo)
        setTaskInput('')
        setTaskDescrip('')
    }
    
    return (
        <div className="add-todo-container">
            <div className="input-container">
                <textarea 
                    className="task-input" 
                    value={taskInput} type="text" 
                    rows={1}
                    onChange={e => setTaskInput(e.target.value)}
                    placeholder="Task Title" >
                </textarea>
                <textarea 
                    className="task-descrip" 
                    value={taskDescrip} 
                    onChange={e => setTaskDescrip(e.target.value)}
                    placeholder="Task Description" >
                </textarea>
                <div className="btn-container">
                    <button className="add-btn" type="button" onClick={ onAddTodo }>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo