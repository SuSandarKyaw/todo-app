import React, { useCallback, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAndRemaining from "./components/CheckAndRemaining";
import AllAndClearBtn from "./components/AllandClearBtn";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterTodo, setFilterTodo] = useState(todoList);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todo) => {
        setTodoList(todo);
        setFilterTodo(todo);
      });
  }, []);

  const addTodo = (todo) => {
    //update server side
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //update client side
    setTodoList((prevState) => [...prevState, todo]);
  };

  const deleteToDo = (todoId) => {
    //server
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
    //client
    setTodoList((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  const updateToDo = (todo) => {
    //server
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //client
    setTodoList((prevState) => {
      return prevState.map((list) => {
        if (list.id === todo.id) {
          return todo;
        }
        return list;
      });
    });
  };

  const checkAll = () => {
    todoList.forEach((list) => {
      list.completed = true;
      updateToDo(list);
    });

    setTodoList((prevState) => {
      return prevState.map((list) => {
        return { ...list, completed: true };
      });
    });
  };

  const clearCompleted = () => {
    todoList.forEach((list) => {
      if (list.completed) {
        deleteToDo(list.id);
      }
    });

    setTodoList((prevState) => {
      return prevState.filter((list) => !list.completed);
    });
  };

  const filterBy = useCallback(
    (filter) => {
      if (filter === "All") {
        setFilterTodo(todoList);
      }
      if (filter === "Active") {
        setFilterTodo(todoList.filter((t) => !t.completed));
      }
      if (filter === "Completed") {
        setFilterTodo(todoList.filter((t) => t.completed));
      }
    },
    [todoList]
  );
  const itemsRemainingCount = todoList.filter((t) => !t.completed).length;
  return (
    <div className="">
      <div className=" mt-5 bg-white mx-auto w-[400px] px-5 h-[600px] items-center">
        <h1 className=" text-xl font-semibold my-5 p-3">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todoList={filterTodo}
          deleteToDo={deleteToDo}
          updateToDo={updateToDo}
        />
        <CheckAndRemaining
          itemsRemainingCount={itemsRemainingCount}
          checkAll={checkAll}
        />
        <AllAndClearBtn clearCompleted={clearCompleted} filterBy={filterBy} />
      </div>
    </div>
  );
};

export default App;
