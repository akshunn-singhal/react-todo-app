export function getFilteredList(tab, todos) {
  let filteredTodoList;
  switch (tab) {
    case "Completed":
      filteredTodoList = todos.filter((todo) => todo.complete);
      break;
    case "Open":
      filteredTodoList = todos.filter((todo) => !todo.complete);
      break;
    default:
      filteredTodoList = todos;
      break;
  }
  return filteredTodoList;
}
