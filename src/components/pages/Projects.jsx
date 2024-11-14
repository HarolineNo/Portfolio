import data from "../../data/index.json";

export const Projects = () => {
  return (
    <section>
      <div>
        <div>
          <h2>My Projects</h2>
        </div>
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none" />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div>
        {data?.projects?.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.src} alt="Placeholder" />
            </div>
            <div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <p>
                {item.link}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
