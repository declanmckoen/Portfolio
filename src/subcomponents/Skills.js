import useFetch from "../hooks/useFetch";
import SkillsList from "./SkillsList";


const Skills = () => {
  const { data, error } = useFetch("/portfolio/data/db.json");

  const frontend = data?.skills?.frontend;
  const backend = data?.skills?.backend;
  const developerTools = data?.skills?.developerTools;
  const libraries = data?.skills?.libraries;

  if (error) {
    return <div className="error">Error loading skills. Please try again later.</div>
  }

  return (
    <div className="skills-wrapper">
      <h1>My Technical Skills</h1>
      <div className="skills">
        <div className="backend-skills">
          <h2>Backend</h2>
          <SkillsList skills={ backend } />
        </div>
        <div className="frontend-skills">
          <h2>Frontend</h2>
          <SkillsList skills={ frontend } />
        </div>
        <div className="developer-tools">
          <h2>Developer Tools and Frameworks</h2>
          <SkillsList skills={ developerTools } />
        </div>
        <div className="libraries">
          <h2>Libraries</h2>
          <SkillsList skills={ libraries } />
        </div>
      </div>

    </div>
  );
}
 
export default Skills;