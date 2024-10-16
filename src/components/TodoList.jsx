import TodoCard from "./TodoCard";
import { getFilteredList } from "../utils/todoUtils";
export default function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  const filteredTodoList = getFilteredList(selectedTab, todos);
  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        const originalIndex = todos.findIndex(
          (obj) => obj.input === todo.input
        );
        return (
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            key={originalIndex}
            todo={todo}
            todoIndex={originalIndex}
          />
        );
      })}
    </>
  );
}
