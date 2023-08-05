import React, { useState } from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Edittodoform from './Edittodoform';
uuidv4();

const Todowrapper = () => {

    const[todos,settodos] = useState([])
    const addTodo = todo =>{
        // updating the todo list based on the last list
        settodos([...todos,
            //passsing th egiven values we want the given array
            {
                id:uuidv4(),
                task:todo,
                completed: false ,
                isediting: false
            }
            ])
            console.log(todos)
    }
    const toggleComplete =(id)=>{
        settodos(todos.map(todo=>todo.id === id ? {
            ...todo,completed:!todo.completed}:todo))

    }
    const  deletetodo=(id)=>{
        settodos(todos.filter(todo=>
            todo.id!==id ))
    }
    const EditTodo = (id) =>{
        settodos(todos.map(todo => todo.id === id ?
             {...todo ,isediting : !todo.isediting }:todo))
    }
    const editTask = (task,id) =>{
   settodos(todos.map(todo=> todo.id === id ? {
    ...todo,task,isediting : !todo.isediting } :todo
   ))
    }

  return (
    <div className='todo-wrapper'>
    <h1>Get These Things done</h1>
    {/* for passing the value as a prop to edit todo form */}
        <Todoform addTodo = {addTodo}/>
        {todos.map((todo,index)=>(
            todo.isediting ? (
                <Edittodoform EditTodo={editTask} task = {todo}/>
            ):
            (
                <Todo 
            task = {todo} key = {index}
            toggleComplete={toggleComplete}
            deletetodo = {deletetodo}
            editTodo = {EditTodo}
            /> 
            )
       
        ))}
       
    </div>
  )
}

export default Todowrapper