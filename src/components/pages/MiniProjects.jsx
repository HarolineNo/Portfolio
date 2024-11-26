import data from '../../data/index.json';
import '../styles/MiniProjects.css';

export const MiniProjects = () => {
  return (
    <section className="section">
      <div>
        <h2 className="mini-title">Mini-Projects</h2>
      </div>

      <div className="mini-container-top">
        {data.miniProjects.map((item, index) => (
          <div key={`top-${index}`} className="mini-cards">
            <img src={item.src} className="mini-img" alt={item.title} />
            <div className="card-info">
              <p className="miniProject-title">{item.title}: {item.tech}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mini-container-bottom">
        {data.miniProjects.map((item, index) => (
          <div key={`top-${index}`} className="mini-cards">
            <img src={item.src} className="mini-img" alt={item.title} />
            <div className="card-info">
              <p className="miniProject-title">{item.title}: {item.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
