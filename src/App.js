import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-small is-link">
        <div className="hero-body">
          <p
            className="title"
            style={{ textAlign: "center", fontSize: "3rem" }}
          >
            Personal Digital Asistants
          </p>
        </div>
      </section>
      <div
        className="columns"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <div className="column is-one-fifth">
          <ProfileCard
            title="Alexa"
            handle="@alexa99"
            image={AlexaImage}
            description="Alexa was created by Amazon."
          />
        </div>
        <div className="column is-one-fifth">
          <ProfileCard
            title="Cortana"
            handle="@cortana32"
            image={CortanaImage}
            description="Cortana is made by Microsoft."
          />
        </div>
        <div className="column is-one-fifth">
          <ProfileCard
            title="Siri"
            handle="@siri01"
            image={SiriImage}
            description="Siri belongs to Apple."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
