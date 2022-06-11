import TodoList from "./views/TodoList";
import Todo from "./views/Todo";
import CreateTodo from "./views/CreateTodo";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import logo from "./logo.svg";

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">
                    <div className="img-wrapper">
                        <img
                            src={logo}
                            alt="react logo"
                            style={{ height: "100%" }}
                        />
                    </div>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/todo/:id" element={<Todo />} />
                <Route path="/create" element={<CreateTodo />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
