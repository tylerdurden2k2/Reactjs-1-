import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Example/Home";
import About from "./Example/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navigation />
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <ListTodo /> */}
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/Todo" element={<ListTodo />}></Route>
                        <Route path="/About" element={<About />}></Route>
                    </Routes>
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
