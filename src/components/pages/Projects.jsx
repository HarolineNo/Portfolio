import data from '../../data/index.json';
import '../styles/Projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MiniProjects } from './MiniProjects';

export const Projects = () => {
  return (
    <>
      <div className="section">
        <div className="project-container">
          <div className="box">
            <h2>My Projects</h2>
            <Card.Link href="https://github.com/HarolineNo" target="_blank" rel="noopener noreferrer">
              <Button className="btn-github" variant="primary">Visit My Github</Button>
            </Card.Link>
          </div>

          <div className="section-container">
            {data.projects?.map((item, index) => (
              <Card key={index}>
                <Card.Img variant="top" src={item.src} style={{ marginBottom: '1rem' }} />
                <Card.Body className="card-content">
                  <Card.Title className="title-text">{item.title}</Card.Title>
                  <Card.Text className="italic-text">{item.tech}</Card.Text>
                  <Card.Text>{item.description}</Card.Text>
                  <div className="demo-source">
                    <Card.Link href={item.demoLink} target="_blank" rel="noopener noreferrer" className="portfolio-text">Demo</Card.Link>
                    <Card.Link href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-text">Source Code</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div><MiniProjects />
    </>
  );
}
