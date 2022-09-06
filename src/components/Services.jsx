import "../components-style/services.css";
import penFancy from "../images/pen-svgrepo-com.svg";
import myImageSvg from "../images/web-design-svgrepo-com.svg";
import Magic from "../images/magic-wand-svgrepo-com.svg";
import html5 from "../images/html5-svgrepo-com.svg";
import database from "../images/database-svgrepo-com.svg";
import cleanCode from "../images/cleancode.webp";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="special-heading" data-aos="zoom-in">
          <span>02.</span>Services
        </h2>
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  {/* <FaPenFancy /> */}
                  <img src={penFancy} alt="" />
                  <div className="text">
                    <h4>creative design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  {/* <FaLaptop /> */}
                  <img src={myImageSvg} alt="" />
                  <div className="text">
                    <h4>responsive design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  <img src={Magic} alt="" />
                  <div className="text">
                    <h4>modern design</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  <img src={html5} alt="" />
                  <div className="text">
                    <h4>psd to html</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  <img src={database} alt="" />
                  <div className="text">
                    <h4>database</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-in">
                <div className="card">
                  <img src={cleanCode} alt="" />
                  <div className="text">
                    <h4>clean code</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
