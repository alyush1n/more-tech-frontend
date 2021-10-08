import './App.css';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Datasets from "./pages/datasets/Datasets";

function App() {
    return (
        <div>
            <TopBar/>
            <div className="container">
                <Sidebar/>
                <Datasets/>
            </div>
        </div>
    );
}

export default App;
