import "./App.css";
import Mainlayout from "./component/Mainlayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Mainlayout />
      </Router>
    </div>
  );
}

export default App;
