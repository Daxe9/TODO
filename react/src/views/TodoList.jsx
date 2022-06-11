import todoService from "../../../todo-service";
import plus from "../../../plus.png";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    todoService.getTodos().then((todos) => setTodos(todos));

    return (
        <div>
            <h1 className="title">
                TODO list&nbsp;
                <img
                    src={plus}
                    alt="plus symbol"
                    onClick={() => navigate("/create")}
                />
            </h1>
            <div className="todo-container">
                <ul>
                    {todos.map((todo, i) => {
                        return (
                            <li
                                key={i}
                                onClick={() => {
                                    navigate(`/todo/${todo._id}`);
                                }}
                            >
                                <div
                                    className={
                                        todo.state
                                            ? "todo done-true"
                                            : "todo done-false"
                                    }
                                >
                                    <div className="todo-content">
                                        <div>
                                            by&nbsp;
                                            <h3 className="author">
                                                {todo.author}
                                            </h3>
                                        </div>
                                        <h4>{todo.content}</h4>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
