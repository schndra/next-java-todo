"use client";

import { useState } from "react";
import { ITodo } from "@/types/todos";
import { FaTrash } from "react-icons/fa6";
import { FaSquareCheck, FaRegSquareCheck } from "react-icons/fa6";
import { deleteTodo, updateTodo } from "@/utils/todo-service";
import { useRouter } from "next/navigation";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const router = useRouter();

  const handleClick = async (todo: ITodo) => {
    await updateTodo(todo);
    router.refresh();
  };

  const handleDelete = async (todoId: string) => {
    await deleteTodo(todoId)
    router.refresh()
  }

  return (
    <li className="p-2 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        {todo.completed ? (
          <button
            onClick={() => handleClick({ ...todo, completed: !todo.completed })}
          >
            <FaSquareCheck />
          </button>
        ) : (
          <button
            onClick={() => handleClick({ ...todo, completed: !todo.completed })}
          >
            <FaRegSquareCheck />
          </button>
        )}
        <p>{todo.title}</p>
      </div>

      <button onClick={()=> handleDelete(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
};
export default TodoItem;
