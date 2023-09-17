import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  // FaDribbble,
} from "react-icons/fa";
import "./contact.css";
import { FiSend } from "react-icons/fi";
const Contact = () => {
  return (
    <section className="contact section">
      <h2
        className="section__title"
        data-aos="fade-left "
        data-aos-duration="3000"
      >
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title" data-aos="flip-left">
            Don't be Shy
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" data-aos="zoom-in" />

              <div data-aos="fade-down-left">
                <span className="info__title"> Mail me</span>
                <h4 className="info__desc">kartikdongare300@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" data-aos="zoom-in" />

              <div data-aos="fade-down-left">
                <span className="info__title"> Call me</span>
                <h4 className="info__desc">+91 9527398933</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="" className="contact__social-link" data-aos="zoom-in">
              <FaFacebookF />
            </a>
            <a href="" className="contact__social-link" data-aos="zoom-in">
              <FaTwitter />
            </a>
            <a href="" className="contact__social-link" data-aos="zoom-in">
              <FaYoutube />
            </a>
          </div>
        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div
              className="form__input-div"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div
              className="form__input-div"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div
              className="form__input-div"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div
            className="form__input-div"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button
            id="cont1"
            className="button"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
