import '../styles/Home.css';

export const Home = () => {
  const careers = ['Software Engineer', 'Web Developer', 'Game Programmer'];

  return (
    <section className="container">
      <div className="terminal-container">
        <div className="terminal">
          <i className="bi bi-circle-fill" style={{ color: "rgb(222, 47, 47)", padding: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(240, 192, 48)", padding: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(96, 209, 126)", padding: 5 }}></i>
        </div>
        <div className="clear-block">
          <div className="glitch">
            <h1 className="header">
              Hey, there!
              <br />
              {`I'm `}
              <span>Haroline</span>
            </h1>
          </div>
          <p className="subtitle">Aspiring {careers}</p>
        </div>
      </div>
      <a href="#About" className="learn-more">Learn More</a>
    </section>
  )
}