import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Projects = () => {
  const { data: projects, error } = useFetch("http://localhost:8000/projects");
  
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