import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Todo = ({ todo, deleteTodo, updateToDo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(todo.title);

  const updateTodoHandler = (e) => {
    e.preventDefault();
    const updateList = {
      id: todo.id,
      title: updateTitle,
      completed: todo.completed,
    };
    updateToDo(updateList);
    setIsEdit(false);
  };

  const checkBoxBtn =()=>{
    const checkList = {
      id : todo.id,
      title:updateTitle,
      completed: !todo.completed
    }
    updateToDo(checkList)
  }
  return (
    <div>
      <div className=" mt-8 flex items-center justify-between">
        <div className=" flex gap-5 items-center">
          <input onChange={checkBoxBtn}
            type="checkbox" checked={todo.completed}
            className=" w-4 h-4 text-gray-500 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          {!isEdit && (
            <label
              onDoubleClick={() => setIsEdit(true)}
              className={`text-sm font-medium text-gray-900 font-sans ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.title}
            </label>
          )}
          {isEdit && (
            <form onSubmit={updateTodoHandler}>
              <input
                onChange={(e) => setUpdateTitle(e.target.value)}
                value={updateTitle}
                type="text"
                className=" border border-gray-200 bg-white text-sm font-sans rounded-lg px-4 py-2 w-[100%] outline-1 outline-gray-300"
              />
            </form>
          )}
        </div>
        <RxCross2
          onClick={() => deleteTodo(todo.id)}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Todo;
