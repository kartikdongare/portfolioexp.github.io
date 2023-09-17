import Profile from "../../assets/home1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" data-aos="zoom-in-down" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title" data-aos="fade-left">
            <span>I'm Kartik Dongare.</span> <>Web Developer</>
          </h1>
          <p className="home__description" data-aos="fade-up-right">
            I'm a front-end developer focused on crafting clean & user-friendly
            experiences, I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          <Link
            to="/about"
            className="button"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
