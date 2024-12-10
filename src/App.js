import Education from "./subcomponents/Education";
import Navbar from "./subcomponents/Navbar";
import Projects from "./subcomponents/Projects";
import ProjectSpecifics from "./subcomponents/ProjectSpecifics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/portfolio" element={ <Projects /> } />
            <Route path="/portfolio/:id" element={ <ProjectSpecifics /> } />
            <Route path="/portfolio/education" element={ <Education /> } />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
