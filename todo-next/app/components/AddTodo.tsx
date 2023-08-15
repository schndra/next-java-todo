"use client";
import { createTodo } from "@/utils/todo-service";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AddTodo = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }

    await createTodo({
      title,
      completed: false,
    });

    //clear state
    setTitle("");
    //refresh router
    router.refresh();
  };

  return (
    <>
      <form
        className="flex justify-center items-center gap-2 mt-4 flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-2 w-full rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="flex items-center justify-center gap-1 p-2 w-full bg-slate-950 rounded-md text-slate-100 uppercase hover:bg-slate-900"
          type="submit"
        >
          <FaPlus />
          <FaPlus size={10} />
          Add Todo
          <FaPlus size={10} />
          <FaPlus />
        </button>
      </form>
    </>
  );
};
export default AddTodo;
