import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompleted,
    editTodo
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">
        Your Todo list
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo} onEdit={editTodo}/>
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted}/>
      </div>
    </main>
  )
}

export default App;
