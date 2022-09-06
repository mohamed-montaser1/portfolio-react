import "../components-style/Portfolio.css";
import AppLand from "../images/App-Land.jpg";
import Timer from "../images/timer.jpg";
import ErrorPage from "../images/404.jpg";
import product from "../images/product.jpg";
import company from "../images/company-website.jpg";
import rest from "../images/rest.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="special-heading" data-aos="zoom-in">
          <span>04.</span> Portfolio
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6" data-aos="flip-right">
                  <div className="content">
                    <img src={AppLand} alt="AppLand" />
                    <div className="details">
                      <h4>AppLand</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/App-Land/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="flip-left">
                  <div className="content">
                    <img src={Timer} alt="Timer" />
                    <div className="details">
                      <h4>Timer</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/timer/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="flip-right">
                  <div className="content">
                    <img src={ErrorPage} alt="ErrorPage" />
                    <div className="details">
                      <h4>ErrorPage</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/404-error-page/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="flip-left">
                  <div className="content">
                    <img src={product} alt="ErrorPage" />
                    <div className="details">
                      <h4>Tablet Website</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/product-website/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="flip-right">
                  <div className="content">
                    <img src={company} alt="ErrorPage" />
                    <div className="details">
                      <h4>company Website</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/company-website/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="flip-left">
                  <div className="content">
                    <img src={rest} alt="restaurant" />
                    <div className="details">
                      <h4>restaurant</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur quia aut nesciunt. Magni, reiciendis.
                      </p>
                      <a
                        href="https://mohamed-montaser1.github.io/mobile-website/"
                        target={"_blank"}
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
