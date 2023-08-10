import { ITodo } from "../types/todos";

const baseUrl = "http://localhost:8080";

export const getAllTodos = async (): Promise<ITodo[]> => {
  const res = await fetch(`${baseUrl}/api/v1/todos`);
  const todos = await res.json();
  return todos;
};
