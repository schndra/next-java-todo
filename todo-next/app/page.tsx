import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="grid h-screen">
      <section className="p-4 place-self-center rounded-lg bg-slate-200 w-[80vw] sm:w-[450px] ">
        <h1 className="text-center text-2xl font-bold">My Todo App</h1>
        <AddTodo />
        <TodoList />
      </section>
    </main>
  );
}
