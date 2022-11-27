import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Example/Home";
import About from "./Example/About";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navigation />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/Todo">
                            <ListTodo />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/ListUser" exact>
                            <ListUser />
                        </Route>
                        <Route path="/ListUser/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </Router>
    );
}

export default App;
