// eslint-disable-next-line no-unused-vars
import React from "react";
import parse from "html-react-parser";
// eslint-disable-next-line react/prop-types
const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item" data-aos="fade-up" data-aos-duration="3000">
      <div className="resume__icon">{icon}</div>
      <span className="resume__data">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  );
};

export default ResumeItem;
