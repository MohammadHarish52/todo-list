import React, { useState } from 'react'

const Edittodoform = ({EditTodo,task}) => {
    const[value,setvalue] = useState(task.task);

    const handleSubmit=(e)=>{
        //prevents the loading to happen on its own
        e.preventDefault();
        // adding the value to to the given list based on the user input
        EditTodo(value,task.id);
        // after addition setting the value to none
        setvalue("")

    }
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type="text" class="update-task"
        onChange = {(e)=>setvalue(e.target.value)} className='todo-input' placeholder='Update task'
        value = {value}
        />
        <button class="update-taskbtn" type ="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}

export default Edittodoform