import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Datasets from "./pages/datasets/Datasets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DatasetPage from "./pages/datasetPage/DatasetPage";
import CreateDataset from "./pages/createDataset/CreateDataset";
import React from "react";
import Preloader from "./components/Preloader";

function App() {
  return (
    <React.Fragment>
        <Preloader />
      <Router>
        <TopBar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/datasets/create">
              <CreateDataset />
            </Route>
            <Route path="/datasets/view/:urn">
              <DatasetPage />
            </Route>
            <Route path="/datasets/:browsePath">
              <Datasets />
            </Route>
            {/* <Route path="/datasets/1">
                        <DatasetPage/>
                    </Route> */}
            <Route path="/datasets">
              <Datasets />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
