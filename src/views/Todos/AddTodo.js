import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddTodo extends React.Component {
    state = {
        title: "",
    };
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleAddNewTodo = () => {
        if (!this.state.title) {
            toast.error("You need to insert title!");
            return;
        }
        this.props.addNewTodo({
            id: "" + Math.floor(Math.random() * 10000),
            title: this.state.title,
        });
        this.setState({
            title: "",
        });
        toast.success("Add job succeed!");
    };
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button
                    type="button"
                    className="btn-add"
                    onClick={() => this.handleAddNewTodo()}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;
