import React from "react";
import "./ListUser.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUser: [],
    };
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }
    handleToDetailUser = (user) => {
        this.props.history.push(`/ListUser/${user.id}`);
    };
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <h1>List User</h1>
                <div className="list-user-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Email</th>
                                <th>name</th>
                            </tr>
                            {listUser &&
                                listUser.length > 0 &&
                                listUser.map((item, index) => {
                                    return (
                                        <tr
                                            key={item.id}
                                            onClick={() =>
                                                this.handleToDetailUser(item)
                                            }
                                        >
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>{`${item.first_name} ${item.last_name}`}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);
