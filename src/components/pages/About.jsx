import '../styles/About.css';
import { Education } from './Education.jsx';

export const About = () => {
  return (
    <div className="about-section">
      <div>
        <h1 className="title">About</h1>
        <div className="title-box"></div>
      </div>
      <div className="about-container">
        <p className="about">
          Computer Science second-year student with a foundation in programming languages such as Python and Java, an interest in all-things tech and seeking internships in software engineering. Developed full-stack projects utilizing tools like React Native and Django, currently building projects that utilize other languages and frameworks. Eager to apply and expand technical expertise in real-world applications and planning on future projects in robotics. 
        </p>
        <div className="about-image-container">
          <div className="image-background">
            <img src='src\assets\images\computer.png' className="about-image"/>
          </div>
        </div>
      </div>
      <Education />
    </div>
  )
}
