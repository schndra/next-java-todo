import { headers } from "next/dist/client/components/headers";
import { ITodo } from "../types/todos";

const baseUrl = "http://localhost:8080";

export const getAllTodos = async (): Promise<ITodo[]> => {
  const res = await fetch(`${baseUrl}/api/v1/todos`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const createTodo = async (todo: {
  title: string;
  completed: boolean;
}): Promise<ITodo> => {
  const res = await fetch(`${baseUrl}/api/v1/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};

export const updateTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${baseUrl}/api/v1/todos/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  console.log(updatedTodo);
  return updatedTodo;
};

export const deleteTodo = async (todoId: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/api/v1/todos/${todoId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
