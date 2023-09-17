import Info from "../../component/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/steve-Cv.pdf";
import Stats from "../../component/Stats";
import "./about.css";
import Skills from "../../component/Skills";
import { resume } from "../../data";
import ResumeItem from "../../component/Resumeitem";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2
          className="section__title"
          data-aos="fade-left "
          data-aos-duration="3000"
        >
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle" data-aos="zoom-in-right">
              Personal Infos
            </h3>
            <ul className="grid info__list" data-aos="fade-right">
              <Info />
            </ul>
            <a
              href={CV}
              download=""
              className="button"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Download Cv{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3
          className="section__subtitle subtitle__center"
          data-aos="zoom-in-down"
        >
          My Skills
        </h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <div className="resume">
        <h3
          className="section__subtitle subtitle__center"
          data-aos="zoom-in-down"
        >
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
