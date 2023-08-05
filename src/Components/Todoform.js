import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
    const[value,setvalue] = useState("");

    const handleSubmit=(e)=>{
        //prevents the loading to happen on its own
        e.preventDefault();
        // adding the value to to the given list based on the user input
        addTodo(value);
        // after addition setting the value to none
        setvalue("")

    }
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type="text" 
        onChange = {(e)=>setvalue(e.target.value)} className='todo-input' placeholder='What is your task today?'
        value = {value}
        />
        <button type ="submit" className='todo-btn'>Add task</button>
    </form>
  )
}

export default Todoform