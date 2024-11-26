import data from '../../data/index.json';
import '../styles/MiniProjects.css';

export const MiniProjects = () => {
  return (
    <section className="section">
      <div>
        <h2 className="mini-title">Mini-Projects</h2>
        <div className="mini-box"></div>
      </div>

      <div className="mini-container-top">
        {data?.miniProjects?.map((item, index) => (
          <div key={index} className="mini-cards">
            <img src={item.src} className="mini-img"/>
            <div className="card-info">
              <h3 className="miniProject-title">{item.title}</h3>
              <p className="mini-tech">{item.tech}</p>
              <button href={item.link} target="_blank" rel="noopener noreferrer" className="mini-btn">Code</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mini-container-bottom">
        {data?.miniProjects1?.map((item, index) => (
          <div key={index} className="mini-cards">
            <img src={item.src} className="mini-img"/>
            <div className="card-info">
              <h3 className="miniProject-title">{item.title}</h3>
              <p className="mini-tech">{item.tech}</p>
              <button href={item.link} target="_blank" rel="noopener noreferrer" className="mini-btn">Code</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

