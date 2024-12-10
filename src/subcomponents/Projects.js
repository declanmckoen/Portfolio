import useFetch from "../hooks/useFetch";
import { Link } from 'react-router-dom';


const Projects = () => {
  const { data, error } = useFetch("/portfolio/data/db.json");

  const projects = data?.projects;

  return (
    <div className="projects-wrapper">
      <h1>My Technical Projects</h1>
        <div className="projects">
          { error && <div>{ error }</div>}
          { projects && projects.map(project => (
            <Link className="project-preview-link" to={"/portfolio/" + project.id} key={ project.id }>
              <div className="project-preview" key={ project.id }><h2>{ project.name }</h2></div>
            </Link>
          ))}
        </div>
    </div>
  );
}
 
export default Projects;