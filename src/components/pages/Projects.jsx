import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import data from "../../data/index.json";
import "../styles/Projects.css";
import { MiniProjects } from "./MiniProjects";

export const Projects = () => {
  const positionIndexes = [0, 1, 2];

  const positions = ["center", "left", "right"];

  const cardVariants = {
    center: { x: "-50%", scale: 1, zIndex: 5, opacity: 1 },
    left: { x: "-130%", scale: 0.8, zIndex: 2, opacity: 0.5 },
    right: { x: "30%", scale: 0.8, zIndex: 2, opacity: 0.5 }
  };

  return (
    <><div className="projects-section">
      <div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-box"></div>
      </div>
      <div className="carousel">
        {data.projects.map((item, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="project-card">
            <Card className="cards">
              <Card.Img
                variant="top"
                src={item.src}
                alt={item.title}
                style={{ height: "20em", borderRadius: "10px", padding: "10px" }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ fontStyle: "italic", color: "rgb(60, 60, 60)" }}>{item.tech}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <div className="card-btn-container">
                  <Button href={item.demoLink} target="_blank" rel="noopener noreferrer" className="card-btn">Demo</Button>
                  <Button href={item.link} target="_blank" rel="noopener noreferrer" className="card-btn">Code</Button>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    <MiniProjects /></>
  );
};
