import useFetch from "../hooks/useFetch";

const Projects = () => {
  const { data, error } = useFetch("/portfolio/data/db.json");

  const projects = data?.projects;
  
  return (
    <div className="projects">
      { error && <div>{ error }</div>}
      {projects && projects.map(project => (
        <div className="project-preview" key={ project.id }>
          <h2>{ project.name }</h2>
        </div>
      ))}
    </div>
  );
}
 
export default Projects;