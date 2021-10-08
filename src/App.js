import './App.css';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Datasets from "./pages/datasets/Datasets";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
    return (
        <Router>
            <TopBar/>
            <div className="container">
                <Sidebar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/datasets">
                        <Datasets/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
