import "../components-style/Certificate.css";
import certificateone from "../images/certificate-one.jpg";
import certificatetwo from "../images/certificate-two.jpg";
const Certificate = () => {
  return (
    <section className="certificate" id="certificate">
      <div className="container">
        <h2 className="special-heading" data-aos="zoom-in">
          <span>03.</span>Certificate
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6" data-aos="zoom-in">
                  <a
                    href="https://academy.hsoub.com/certificate/ZGY21Y416HM5GF0ZDQCBBBXXK.pdf"
                    target={"_blank"}
                  >
                    <img
                      className="certificate"
                      src={certificateone}
                      alt="certificateone"
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-md-6" data-aos="zoom-in">
                  <a
                    href="https://www.sololearn.com/Certificate/CT-DDVS5IMA/pdf"
                    target={"_blank"}
                  >
                    <img
                      className="certificate"
                      src={certificatetwo}
                      alt="certificateone"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
