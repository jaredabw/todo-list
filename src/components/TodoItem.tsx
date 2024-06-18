import { Trash2 } from "lucide-react"
import { Todo } from "../types/todos"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex grow items-center gap-2 border rounded-md p-2 border-grey-100 shadow bg-white hover:bg-slate-200">
                <input type="checkbox"
                checked={todo.completed}
                onChange={((e) => onCompletedChange(todo.id, e.target.checked))}
                className="scale-125"/>
                <span className={todo.completed ? "line-through text-gray-500" : ""}>
                    {todo.title}
                </span>
            </label>
            <button className="p-2" onClick={() => onDelete(todo.id)}>
                <Trash2 size={20} className="text-gray-500"/>
            </button>
        </div>
    )
}