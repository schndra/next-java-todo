import { FaPlus } from "react-icons/fa6";

const AddTodo = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4 flex-col">
      <input type="text" className="p-2 w-full rounded-md" />
      <button className="flex items-center justify-center gap-1 p-2 w-full bg-slate-950 rounded-md text-slate-100 uppercase hover:bg-slate-900">
        <FaPlus />
        <FaPlus size={10} />
        Add Todo
        <FaPlus size={10} />
        <FaPlus />
      </button>
    </div>
  );
};
export default AddTodo;
