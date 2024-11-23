import '../styles/Home.css';

export const Home = () => {
  return (
    <section className="container">
      <div className="terminal-container">
        <div className="terminal">
          <i className="bi bi-circle-fill" style={{ color: "rgb(222, 47, 47)", padding: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(240, 192, 48)", padding: 5 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(96, 209, 126)", padding: 5 }}></i>
        </div>
        <div className="clear-block">
          <h1 className="header glitch">
            Hey, there!
            <br />
            {`I'm `}
            <span>Haroline</span>
          </h1>
          <p className="subtitle">Aspiring Software Engineer</p>
        </div>
      </div>
    </section>
  )
}