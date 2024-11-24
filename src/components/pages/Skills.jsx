import data from '../../data/index.json';
import '../styles/Skills.css';

export const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-list">
        {data.skills.map((skill, index) => (
          <div key={index}>{skill.title}</div>
        ))}
      </div>
    </div>
  )
}
