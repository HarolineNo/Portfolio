import data from '../../data/index.json';
import '../styles/Projects.css';

export const Projects = () => {
  return (
    <section className="section">
      <div className="box">
        <h2>My Projects</h2>
        <a href="https://github.com/HarolineNo" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">Visit My GitHub</button>
        </a>
      </div>
      <div className="section-container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="card">
            <div className="image">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="card-content">
              <div>
                <h3>{item.title}</h3>
                <p className="italic-text">{item.tech}</p>
                <p>{item.description}</p>
              </div>
              <div className="demo-source">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h4 className="portfolio-text">Demo</h4>
                </a>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h4 className="portfolio-text">Source Code</h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
