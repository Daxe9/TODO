import { useState } from "react";
import { useNavigate } from "react-router";
import todoService from "../../../todo-service";
export default function CreateTodo() {
    const [todo, setTodo] = useState({
        content: "",
        author: "",
        state: false,
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await todoService.createTodo(todo);
        navigate("/");
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="content">Content</label>
                <input
                    id="content"
                    type="text"
                    value={todo.content}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            content: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    value={todo.author}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            author: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <label htmlFor="state">Done</label>
                <input
                    id="state"
                    type="checkbox"
                    value={todo.state}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            state: e.target.checked,
                        });
                    }}
                    style={{
                        backgroundColor: todo.state ? "green" : "red",
                    }}
                />
            </div>

            <button type="submit" onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}
