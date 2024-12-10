const SkillsList = ({ skills }) => {
  return (
    <ul>
      { skills && skills.map((skill, index) => {
        return <li key={index}>{ skill }</li>
      })}
    </ul>
  );
}
 
export default SkillsList;