import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="container">
      <div className="terminal-container">
        <div className="terminal">
          <i className="bi bi-circle-fill" style={{ color: "rgb(222, 47, 47)", padding: 10 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(240, 192, 48)", padding: 10 }}></i>
          <i className="bi bi-circle-fill" style={{ color: "rgb(96, 209, 126)", padding: 10 }}></i>
        </div>
        <div className="clear-block">
          <h1 className="header">{`Hi, I'm `}<span className="wrap">Haroline</span></h1>
          <p className="subtitle">Computer Science Undergradute</p>
        </div>
      </div>
    </div>
  )
}