import './App.css';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Datasets from "./pages/datasets/Datasets";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import DatasetPage from "./pages/datasetPage/DatasetPage";
import CreateDataset from "./pages/createDataset/CreateDataset";

function App() {
    return (
        <Router>
            <TopBar/>
            <div className="container">
                <Sidebar/>
                <Switch>
                    <Route path="/datasets/create">
                        <CreateDataset/>
                    </Route>
                    <Route path="/datasets/1">
                        <DatasetPage/>
                    </Route>
                    <Route path="/datasets">
                        <Datasets/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
