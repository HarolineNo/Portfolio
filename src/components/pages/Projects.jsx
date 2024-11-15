import data from '../../data/index.json';
import '../styles/Projects.css';

export const Projects = () => {
  return (
    <section className="section">
      <div className="container-box">
        <div className="container">
          <h2>My Projects</h2>
        </div>
        <div>
          <button className="btn-github">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none"/>
            Visit My GitHub
          </button>
        </div>
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
                <p>{item.description}</p>
              </div>
              <p className="portfolio-link">
                {item.link}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none"/>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
