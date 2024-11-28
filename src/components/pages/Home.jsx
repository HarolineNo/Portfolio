import { useEffect, useState } from 'react';
import '../styles/Home.css';

export const Home = () => {
  const careers = ['Software Engineer', 'Web Developer', 'Game Programmer'];
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i =  loopNum % careers.length;
    let fullText = careers[i];
    let updatedText = deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (deleting) {
      setDelta(50);
    }

    if (!deleting && updatedText == fullText) { 
      setDeleting(true);
      setDelta(period);
    } 
    else if (deleting && updatedText == '') {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }

  return (
    <section className="container">
      <div className="terminal-container">
        <div className="terminal">
          <i className="bi bi-circle-fill" style={{ color: "rgb(222, 47, 47)", padding: 5, marginLeft: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(240, 192, 48)", padding: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(96, 209, 126)", padding: 5 }}></i>
        </div>
        <div className="clear-block">
          <div className="glitch">
            <h1 className="header">
              Hi, there!
              <br />
              {`I'm `}
              <span>Haroline</span>
            </h1>
          </div>
          <p className="subtitle">Aspiring {text}</p>
        </div>
      </div>
      <div className="learn-btns">
        <a href="#About" className="learn-more">See More</a>
        <a href="https://docs.google.com/document/d/1JIxje_q7zQ5zDT8pIUB6zYrX9MDw_78dzD9GwSFQ2rY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume">Resume</a>
      </div>
    </section>
  )
}