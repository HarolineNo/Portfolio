import data from '../../data/index.json';
import '../styles/MiniProjects.css';
import { useState } from 'react';
import Button from'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

export const MiniProjects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="section">
      <div className="box">
        <h2>Mini-Projects</h2>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
          {data?.miniProjects?.map((item, index) => (
            <Carousel.Item key={index}>
              <img src={item.src} />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <h4 style={{ fontStyle: 'italic' }}>{item.tech}</h4>
                <p>{item.description}</p>
                <Button href={item.link} target="_blank" rel="noopener noreferrer">Source Code</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </section>
  );
}

