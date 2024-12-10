import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const ProjectSpecifics = () => {
  const { id } = useParams();
  const { data, error } = useFetch("/portfolio/data/db.json");
  console.log(data);

  const project = data?.projects?.find(project => project.id === id);

  if (!data || !data.projects) {
    return <p>Loading...</p>;
  }
  return (
    <p>{ project && project.about }</p>
  );
}
 
export default ProjectSpecifics;