import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    render() {
        console.log("check props Home: ", this.props);
        return <h1>Hello Home Page</h1>;
    }
}
export default withRouter(Home);
