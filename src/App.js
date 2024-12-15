import Education from "./subcomponents/Education";
import Navbar from "./subcomponents/Navbar";
import Home from "./subcomponents/Home";
import ProjectSpecifics from "./subcomponents/ProjectSpecifics";
import Experience from "./subcomponents/Experience";
import Contact from "./subcomponents/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/portfolio" element={ <Home /> } />
            <Route path="/portfolio/:id" element={ <ProjectSpecifics /> } />
            <Route path="/portfolio/education" element={ <Education /> } />
            <Route path="/portfolio/experience" element={ <Experience /> } />
            <Route path="/portfolio/contact" element={ <Contact /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
