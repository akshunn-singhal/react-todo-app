export default function Header({ todos }) {
  const todosLength = todos.length;
  const isTasksPlural = todosLength > 1;
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {isTasksPlural ? "tasks" : "task"}
      </h1>
    </header>
  );
}
