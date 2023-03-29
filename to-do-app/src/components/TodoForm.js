import React,{useState} from 'react'
import { TodoWrapper } from './TodoWrapper';

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value)
        setValue("")

    }
  return (
    <form onSubmit={handleSubmit}> 
        <input type="text" className='todo-input' placeholder='To Do List' onChange={(e) => setValue(e.target.value) } value = {value} />
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
