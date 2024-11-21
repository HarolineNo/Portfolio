import data from '../../data/index.json';
import '../styles/Projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MiniProjects } from './MiniProjects';

export const Projects = () => {
  return (
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
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ fontStyle: 'italic' }}>{item.tech}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <div className="box">
                  <Card.Link href={item.demoLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, fontWeight: "bold", color: "gray", textDecoration: "none" }}>
                    Demo <i className="bi bi-arrow-up-right"></i>
                  </Card.Link>
                  <Card.Link href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, fontWeight: "bold", color: "gray", textDecoration: "none" }}>
                    Source Code <i className="bi bi-arrow-up-right"></i>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <MiniProjects />
    </div>
  );
}
