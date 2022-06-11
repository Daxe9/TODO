import { useState, Component } from "react";
import { useParams } from "react-router-dom";
import todoService from "../../../todo-service";

function wrapper(Component) {
    return (props) => <Component {...props} id={useParams().id} />;
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            content: "",
            author: "",
            state: false,
        };
    }

    async componentDidMount() {
        const todo = await todoService.getTodo(this.props.id);
        this.setState(todo);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await todoService.updateTodo(this.state._id, this.state);
    };

    render() {
        if (this.state) {
            return (
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="mongodbId">ID</label>
                        <input
                            id="mongodbId"
                            type="text"
                            value={this.state._id}
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <input
                            id="content"
                            type="text"
                            value={this.state.content}
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
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
                            value={this.state.author}
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
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
                            value={this.state.state}
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    state: e.target.checked,
                                });
                            }}
                            style={{
                                backgroundColor: this.state.state
                                    ? "green"
                                    : "red",
                            }}
                        />
                    </div>

                    <button type="submit" onClick={this.handleSubmit}>
                        Update
                    </button>
                </form>
            );
        } else {
            return <div>Loading</div>;
        }
    }
}

export default wrapper(Todo);
