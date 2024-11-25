import { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import data from "../../data/index.json";
import "../styles/Projects.css";

export const Projects = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const viewportWidth = useState(window.innerWidth);

  const centerX = viewportWidth / 2;
  console.log(centerX);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % data.projects.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) =>
          (prevIndex - 1 + data.projects.length) % data.projects.length
      )
    );
  };

  const positions = ["center", "left", "right"];

  const cardVariants = {
    center: { x: "-50%", scale: 1, zIndex: 5, opacity: 1 },
    left: { x: "20%", scale: 0.8, zIndex: 2, opacity: 0.5 },
    right: { x: "-120%", scale: 0.8, zIndex: 2, opacity: 0.5 },
  };

  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="carousel">
        {data.projects.map((item, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="project-card">
            <Card>
              <Card.Img
                variant="top"
                src={item.src}
                alt={item.title} 
                style={{ height: "10rem", objectFit: "cover" }} 
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ fontStyle: "italic" }}>{item.tech}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Card.Link href={item.demoLink} target="_blank" rel="noopener noreferrer">Demo</Card.Link>
                <Card.Link href={item.link} target="_blank" rel="noopener noreferrer">Source Code</Card.Link>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="carousel-btns">
        <button className="back-btn" onClick={handleBack}>Back</button>
        <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
