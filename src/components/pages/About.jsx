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
          I&apos;m a second year Computer Science student at MSU. Outside of school I study on my own to become proficient at software and web development. In the future I also want to get into game development and robotics. In my free time I like learning new things, exloporing my creative side with painting, and just watching Netflix. 
        </p>
        <div className="about-image-container">
          <div className="image-background">
            <img src='./assets/images/astro.png' className="about-image"/>
          </div>
        </div>
      </div>
      <Education />
    </div>
  )
}
