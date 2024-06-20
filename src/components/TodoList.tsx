import TodoItem from "./TodoItem";
import { Todo } from "../types/todos";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string) => void;
}

export default function TodoList({
    todos, onCompletedChange, onDelete, onEdit
}: TodoListProps) {
    // const todosSorted = todos.sort((a, b) => {
    //     if (a.completed === b.completed) {return b.id - a.id}
    //     return a.completed ? 1 : -1;
    // });

    return (
    <>
        <div className="space-y-2">
            {todos.map((x) => (
            <TodoItem
            key={x.id}
            todo={x}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
            onEdit={onEdit} />
            ))}
        </div>
        {todos.length === 0 && (<p className="text-center text-sm text-grey-500">
            No todos found. Add one to get started!
        </p>)}
    </>
    );
}