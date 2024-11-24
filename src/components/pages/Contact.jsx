import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact-section">
      <div>
        <h1 className="title">Contact</h1>
        <div className="title-box"></div>
      </div>
      <div className="contact-info">
        <div className="contact-image">
          <img src='src\assets\images\quiz.png' />
        </div>
        <div className="contact-container">
          <p className="phone">
            {`(973) 771-9969`}
          </p>
          <p className="email1">
            {`noesih1@montclair.edu`}
          </p>
          <p className="email2">
            {`harolinenoesi@gmail.com`}
          </p>
          <div className="buttons">
            <div className="linkedin">
              LinkedIn
            </div>
            <div className="github">
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
