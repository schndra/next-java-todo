import { ITodo } from "@/types/todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
}
  return (
    <div className="mt-4">
      <TodoItem />
    </div>
  );
};
export default TodoList;
