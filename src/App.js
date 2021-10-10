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
import Guard from "./pages/login/Guard";
import Login from "./pages/login/Login";
import ViewDatasets from "./pages/viewDatasets/viewDataset";
import ViewDataset from "./pages/ViewDataset/ViewDataset";

function App() {
  return (
    <React.Fragment>
      <Preloader />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Guard>
            <TopBar />
            <div className="container">
              <Sidebar />
              <Route exact path="/dataset/create">
                <CreateDataset />
              </Route>
              <Route exact path="/datasets/:datasetID">
                <ViewDataset />
              </Route>
              <Route exact path="/datasets">
                <ViewDatasets />
              </Route>
              
              <Route exact path="/models/view/:urn">
                <DatasetPage />
              </Route>
              <Route exact path="/models/:browsePath">
                <Datasets />
              </Route>
              {/* <Route path="/datasets/1">
                        <DatasetPage/>
                    </Route> */}
              <Route exact path="/models">
                <Datasets />
              </Route>
              <Route exact path="/dashboard">
                <Home />
              </Route>
            </div>
          </Guard>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
