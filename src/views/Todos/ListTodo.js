import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: "Xem bong da" },
            { id: "todo2", title: "Choi game" },
            { id: "todo3", title: "Lap trinh React" },
        ],
        editTodo: {},
    };
    addNewTodo = (job) => {
        this.setState({
            listTodos: [...this.state.listTodos, job],
        });
    };
    handleDeleteTodo = (job) => {
        let currentTodo = this.state.listTodos.filter(
            (item) => item.id !== job.id
        );
        this.setState({
            listTodos: currentTodo,
        });
        toast.success("Delete succeed!");
    };
    handleEditTodo = (job) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //Save
        if (!isEmptyObj) {
            let objIndex = listTodos.findIndex((obj) => obj.id === editTodo.id);
            listTodos[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodos,
                editTodo: {},
            });
            toast.success("Edit succeed!");
        } else {
            //Edit
            this.setState({
                editTodo: job,
            });
        }
    };
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos &&
                        listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-item">
                                    {!isEmptyObj && editTodo.id === item.id ? (
                                        <>
                                            <span>{`${index + 1} - `}</span>
                                            <input
                                                value={editTodo.title}
                                                type="text"
                                                onChange={(event) =>
                                                    this.handleOnChangeEditTodo(
                                                        event
                                                    )
                                                }
                                            />
                                        </>
                                    ) : (
                                        <span>{`${index + 1} - ${
                                            item.title
                                        }`}</span>
                                    )}
                                    <span className="btn">
                                        <button
                                            type="button"
                                            className="btn-edit"
                                            onClick={() =>
                                                this.handleEditTodo(item)
                                            }
                                        >
                                            {!isEmptyObj &&
                                            editTodo.id === item.id
                                                ? "Save"
                                                : "Edit"}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-delete"
                                            onClick={() =>
                                                this.handleDeleteTodo(item)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ListTodo;
