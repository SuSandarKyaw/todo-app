import React from "react";
import Todo from "./Todo";
const TodoList = ({ todoList, deleteToDo , updateToDo }) => {
  return (
    <div className="">
      {todoList.map((todo) => {
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteToDo} updateToDo={updateToDo} />;
      })}
      <hr className=" border border-gray-300 my-5" />
    </div>
  );
};

export default TodoList;
