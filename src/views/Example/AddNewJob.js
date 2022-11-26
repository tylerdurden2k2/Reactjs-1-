import React from "react";

class AddNewJob extends React.Component {
    state = {
        title: "",
        salary: "",
    };
    handleOnChange = (event, id) => {
        let copyState = this.state;
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };
    handleAddJob = () => {
        this.props.addNewJobFunction({
            id: "" + Math.floor(Math.random() * 10000),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: "",
            salary: "",
        });
    };
    render() {
        let { title, salary } = this.state;
        return (
            <>
                <label>Job</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChange(event, "title")}
                />
                <label>Salary</label>
                <input
                    type="text"
                    value={salary}
                    onChange={(event) => this.handleOnChange(event, "salary")}
                />
                <div>
                    <button onClick={() => this.handleAddJob()}>Add Job</button>
                </div>
            </>
        );
    }
}

export default AddNewJob;
