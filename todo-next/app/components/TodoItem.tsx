import { FaTrash } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";

const TodoItem = () => {
  return (
    <li className="p-2 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <FaSquareCheck />
        {/* <input type="checkbox" className="hover:cursor-pointer" /> */}
        <p>todo text asdfsdfsdfsdfsdf</p>
      </div>

      <FaTrash />
    </li>
  );
};
export default TodoItem;
