import React from "react";
import "../components-style/About.css";
import AboutImage from "../images/about.png";
const About = () => {
  return (
    <section className="about about-section" id="about">
      <div className="container">
        <h2
          className="special-heading special-about-heading"
          data-aos="zoom-in"
        >
          <span>01.</span>About Me
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6" data-aos="fade-right">
                  <p>
                    hello iam mohamed montaser, i am fullstack developer, i've
                    one year of experiance , I've a certificate from an
                    accredited authority, i've learned
                  </p>
                  <ul className="mt-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>01.</span>HTML
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>02.</span>CSS
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>03.</span>JAVASCRIPT
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>04.</span>RESPONSIVE DESIGN
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>05.</span>BOOTSTRAP 4 & 5
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>06.</span>SCSS
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>07.</span>NPM
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>08.</span>WEBPACK 4 & 5
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>09.</span>GITHUB
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>10.</span>NODEJS
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>11.</span>EXPRESS
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>12.</span>MONGODB
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>12.</span>POSTMAN
                          </li>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <li>
                            <span>12.</span> AOS
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6 img-col">
                  <div className="layer"></div>
                  <img
                    className="about-img"
                    data-aos="fade-left"
                    src={AboutImage}
                    alt="AboutImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
