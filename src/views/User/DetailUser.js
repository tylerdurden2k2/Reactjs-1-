import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let user = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: user.data && user.data.data ? user.data.data : {},
            });
        }
    }
    handleBackUser = () => {
        this.props.history.push("/ListUser");
    };
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                {isEmptyObj ? (
                    <div>User doesn't exist!</div>
                ) : (
                    <>
                        <h1>
                            This is Detail User {this.props.match.params.id}
                        </h1>
                        <div className="detail-user-content">
                            <div>
                                User's name:{" "}
                                {`${user.first_name} ${user.last_name}`}
                            </div>
                            <div>User's email: {user.email}</div>
                            <div>
                                <img src={user.avatar} alt="hinh anh"></img>
                            </div>
                        </div>
                    </>
                )}
                <div>
                    <button type="button" onClick={() => this.handleBackUser()}>
                        Back
                    </button>
                </div>
            </>
        );
    }
}

export default withRouter(DetailUser);
