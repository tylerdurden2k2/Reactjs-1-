import React from "react";

class ShowHide extends React.Component {
    state = {
        isShow: false,
    };
    handleShowHideBtn = () => {
        this.setState({
            isShow: !this.state.isShow,
        });
    };
    handleDeleteJob = (job) => {
        this.props.deleteJob(job);
    };
    render() {
        let { arrJobs } = this.props;
        let { isShow } = this.state;
        return (
            <>
                {isShow === false ? (
                    <div>
                        <button onClick={() => this.handleShowHideBtn()}>
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        {arrJobs &&
                            arrJobs.length > 0 &&
                            arrJobs.map((item) => {
                                return (
                                    <li key={item.id}>
                                        {`${item.title}    ${item.salary}`}
                                        <>{"    "}</>
                                        <button
                                            onClick={() =>
                                                this.handleDeleteJob(item)
                                            }
                                        >
                                            X
                                        </button>
                                    </li>
                                );
                            })}

                        <div>
                            <button onClick={() => this.handleShowHideBtn()}>
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default ShowHide;
