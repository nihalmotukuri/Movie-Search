import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

const todos = [
  // {
  //   id: uuidv4(),
  //   task: 'Buy groceries',
  //   description: 'Pick up milk, eggs, bread, and fruits from the supermarket',
  // },
  // {
  //   id: uuidv4(),
  //   task: 'Workout',
  //   description: 'Complete a 30-minute HIIT session followed by stretching',
  // },
  // {
  //   id: uuidv4(),
  //   task: 'Read a book',
  //   description: 'Read at least 50 pages of the current novel',
  // },
  // {
  //   id: uuidv4(),
  //   task: 'Learn React',
  //   description: 'Finish the Hooks section and build a small practice component',
  // },
  // {
  //   id: uuidv4(),
  //   task: 'Call Mom',
  //   description: 'Catch up with Mom and check how she’s doing',
  // },
];


const App = () => {
  const localTodos = JSON.parse(localStorage.getItem('todo_list'))
  const [todoList, setTodoList] = useState(localTodos !== null ? localTodos : todos)

  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(todoList))
  }, [todoList])

  const addTask = (newTodo) => {
    const newTask = {
        id: uuidv4(),
        task: newTodo.task,
        description: newTodo.description
    }

    setTodoList(prevTodoList => [...prevTodoList, newTask])
  }

  const deleteTask = (id) => {
    const filteredTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredTodoList)
  }

  return (
    <section className="app">
      <h1 className="app-name">To-Do List</h1>
      <AddTodo addTask={addTask} />
      <TodoList todoList={todoList} deleteTask={deleteTask} />
    </section>
  )
}

export default App
