import Navbar from "./subcomponents/Navbar";
import Projects from "./subcomponents/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>

          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
