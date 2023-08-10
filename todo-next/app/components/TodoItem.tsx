import { ITodo } from "@/types/todos";
import { FaTrash } from "react-icons/fa6";
import { FaSquareCheck, FaRegSquareCheck } from "react-icons/fa6";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className="p-2 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        {todo.completed ? (
          <button>
            <FaRegSquareCheck />
          </button>
        ) : (
          <button>
            <FaSquareCheck />
          </button>
        )}
        <p>{todo.title}</p>
      </div>

      <button>
        <FaTrash />
      </button>
    </li>
  );
};
export default TodoItem;
