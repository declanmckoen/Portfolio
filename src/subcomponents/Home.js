import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
  return (
    <div className="home">
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;