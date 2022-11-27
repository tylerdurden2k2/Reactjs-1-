import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    handleDeleteUser = (user) => {
        this.props.deleteUser(user);
    };
    handleAddUser = () => {
        this.props.addUser();
    };
    render() {
        let listUser = this.props.dataRedux;
        return (
            <>
                <h1>Hello Home Page</h1>
                {listUser &&
                    listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {`${index + 1} - ${item.name}`}
                                <span
                                    onClick={() => this.handleDeleteUser(item)}
                                >
                                    &nbsp; X
                                </span>
                            </div>
                        );
                    })}
                <div>
                    <button onClick={() => this.handleAddUser()}>Add</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.listUser,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userDelete) =>
            dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUser: () => dispatch({ type: "ADD_USER" }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
