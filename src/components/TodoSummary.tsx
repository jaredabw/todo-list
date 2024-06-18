import { Todo } from "../types/todos";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed);

    if (todos.length === 0) {
        return null;
    }
    else {
        return (
            <div className="text-center space-y-2">
                <p className="text-sm font-medium">
                    {completedTodos.length} out of {todos.length} todo{todos.length===1?"":"s"} completed
                </p>
                {completedTodos.length === todos.length && (
                    <p className="text-s font-medium">
                        All todos completed! 🎉🎉
                    </p>
                )}
                {completedTodos.length > 0 && (
                    <button
                    onClick={deleteAllCompleted}
                    className="text-sm text-gray-600 hover:underline">
                        Delete all completed.
                    </button>
                )}
            </div>
        )
    }
}