import React from "react";
import ShowHide from "./ShowHide";
import AddNewJob from "./AddNewJob";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "job1", title: "Teacher", salary: "300" },
            { id: "job2", title: "Coach", salary: "200" },
            { id: "job3", title: "Driver", salary: "500" },
        ],
    };
    addNewJobFunction = (job) => {
        let newArrJobs = [...this.state.arrJobs, job];
        this.setState({
            arrJobs: newArrJobs,
        });
    };
    deleteJob = (job) => {
        let newArrJobs = this.state.arrJobs.filter((item) => {
            return item.id !== job.id;
        });
        this.setState({
            arrJobs: newArrJobs,
        });
    };

    render() {
        return (
            <>
                <AddNewJob addNewJobFunction={this.addNewJobFunction} />
                <br />
                <ShowHide
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        );
    }
}

export default MyComponent;
