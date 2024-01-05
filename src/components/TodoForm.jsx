import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

  const [title,setTitle] = useState(""); 

  const handleSubmit =(e) =>{
        e.preventDefault();
        const todo = {
          id : Math.random(),
          title,
          completed : false
        }
        addTodo(todo)
        setTitle('')
  } 
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='What do you need to do?' className=' border border-gray-200 outline-1 outline-gray-300 bg-white rounded-lg px-4 py-2 w-[100%]' />
      </form>
    </div>
  )
}

export default TodoForm
