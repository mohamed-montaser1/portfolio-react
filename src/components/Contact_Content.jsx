import "../components-style/Contact.css";

const Contact_Content = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="special-heading">
          <span>05.</span>Get In Touch
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        aria-describedby="emailHelp"
                        placeholder="name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        placeholder="email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Your Massage"
                        id="textarea"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Content;
