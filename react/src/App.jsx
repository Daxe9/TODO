import TodoList from "./views/TodoList";
import Todo from "./views/Todo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
            </Routes>
        </Router>
    );
}

export default App;
