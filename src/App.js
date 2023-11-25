import "bulma/css/bulma.css";
import Course from "./Course";
import Picture from "./images/501757-The-Dark-Knight-Heath-Ledger-movies-quote-anime.jpg";
import Image from "./images/Black-Joker-Wallpapers-HD.jpg";
import Photo from "./images/joker.jpg";
import Logo from "./images/joker2.jpg";

const App = () => {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">The Joker</p>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                title="Picture"
                image={Picture}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia a, recusandae quo explicabo dolores aspernatur magnam beatae assumenda nihil quos saepe amet voluptate maxime voluptatem laboriosam cupiditate dignissimos quam libero."
              />
            </div>
            <div className="column">
              <Course
                title="Image"
                image={Image}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia a, recusandae quo explicabo dolores aspernatur magnam beatae assumenda nihil quos saepe amet voluptate maxime voluptatem laboriosam cupiditate dignissimos quam libero."
              />
            </div>
            <div className="column">
              <Course
                title="Photo"
                image={Photo}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia a, recusandae quo explicabo dolores aspernatur magnam beatae assumenda nihil quos saepe amet voluptate maxime voluptatem laboriosam cupiditate dignissimos quam libero."
              />
            </div>
            <div className="column">
              <Course
                title="Logo"
                image={Logo}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia a, recusandae quo explicabo dolores aspernatur magnam beatae assumenda nihil quos saepe amet voluptate maxime voluptatem laboriosam cupiditate dignissimos quam libero."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
