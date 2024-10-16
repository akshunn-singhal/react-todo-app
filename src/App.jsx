import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getFilteredList } from "./utils/todoUtils";

function App() {
  /* const todos = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Get the groceries!", complete: false },
    { input: "Learn how to web design", complete: false },
    { input: "Say hi to gran gran", complete: true },
  ];
 */
  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleCompleteTodo(selectedIndex, todo) {
    const newTodoList = [...todos];
    const completedTodo = newTodoList[selectedIndex];
    completedTodo["complete"] = true;
    newTodoList[selectedIndex] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(selectedIndex) {
    const newTodoList = todos.filter((val, index) => index !== selectedIndex);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem(
      "todo-app",
      JSON.stringify({ todoList: currentTodos })
    );
  }

  useEffect(() => {
    const db = [];
    const existingTodos = localStorage?.getItem("todo-app");
    setTodos(JSON.parse(existingTodos)?.todoList || db);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
