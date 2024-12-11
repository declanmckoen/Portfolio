import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const ProjectSpecifics = () => {
  const { id } = useParams();
  const { data, error } = useFetch("/portfolio/data/db.json");

  const project = data?.projects?.find(project => project.id === id);

  if (!data || !data.projects) {
    return <p>Loading...</p>;
  }
  return (
    <div className="project-specifics-wrapper">
      <h1>{ project.name }</h1>
      <div className="link">
        <a href={ project.github } target="_blank">Link to repository</a>
      </div>
      <div className="project-specifics">
        <div className="project-about">
          <h3>About</h3>
          { project.about }
        </div>
        <div className="project-technical">
          <h3>Technical Details</h3>
          { project.technical }
        </div>
        <div className="skills-used">
          <h3>Skills Used</h3>
          <ul>
            { project.skills.map((skill, index) => {
              return <li key={index}>{ skill }</li>
            })}
          </ul>
        </div>
        <div className="pictures">
          { project.pictures.map((picture, index) => {
            return <img src={picture} alt={picture} key={index} />
          })}
        </div>
      </div>
    </div>
  );
}
 
export default ProjectSpecifics;