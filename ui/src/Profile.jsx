import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <a
              className="uk-navbar-item uk-logo uk-margin-remove-bottom"
              href="index.html"
            >
              <img
                className="brand-logo"
                src="images/blogo.svg"
                alt="Biophoton"
              />
            </a>
          </div>
          <div className="uk-navbar-right">
            <a
              className="uk-navbar-toggle uk-hidden@m"
              data-uk-navbar-toggle-icon
              href="#"
              type="button"
              uk-toggle="target: #offcanvas-push"
            />
            <div className="uk-container uk-visible@m">
              <ul className="uk-navbar-nav">
                <li className="uk-button uk-button-text">
                  <a className="uk-margin-remove" href="index.html">
                    Home
                  </a>
                </li>
                <li className="uk-button uk-button-text">
                  <a className="uk-margin-remove" href="#">
                    Products
                  </a>
                </li>
                <li className="uk-button uk-button-text">
                  <a className="uk-margin-remove" href="#">
                    Research
                  </a>
                </li>
                <li className="uk-button uk-button-text">
                  <a className="uk-margin-remove" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="uk-button uk-button-text">
                  <a className="uk-margin-remove" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="offcanvas-push" uk-offcanvas="flip: true; overlay: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
              <button
                className="uk-offcanvas-close"
                type="button"
                data-uk-close
              />
              <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                <li className="uk-nav-header">Menu</li>
                <li className="uk-divider-icon" />
                <li className="uk-parent">
                  <a href="index.html">Home</a>
                </li>
                <li className="uk-parent">
                  <a href="about.html">Products</a>
                </li>
                <li className="uk-parent">
                  <a href="about.html">Research</a>
                </li>
                <li className="uk-parent">
                  <a href="about.html">About Us</a>
                </li>
                <li className="uk-parent">
                  <a href="services.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="uk-section uk-padding-remove">
          <div uk-slideshow="ratio: 7:3.6">
            <ul className="uk-slideshow-items">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7acc1740ec4bfb32dfbfd2db288036cd"
                  alt=""
                  data-uk-cover
                />
                <div className="herotextpar uk-position-left uk-position-medium uk-position-center-left uk-text-middle uk-text-left">
                  <div className="uk-width-1-2@s">
                    <p className="uk-margin-remove herotext">
                      We bring together Electronics, Photonics and Biology
                      experts under a single roof to realise socially relevant
                      products.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-section uk-padding-remove">
          <div className="uk-container">
            <div
              className="uk-child-width-1-2@s uk-grid-collapse uk-text-center uk-padding-small uk-padding-remove-horizontal"
              data-uk-grid
            >
              <div className="uk-width-1-2@m">
                <div className="uk-tile uk-tile-muted">
                  <img
                    className="uk-align-center"
                    style={{ marginBottom: 2 + "px" }}
                    src="images/science.svg"
                    width="70"
                    height="70"
                    data-uk-svg
                  />
                  <p className="uk-text-lead uk-margin-remove-top">
                    Biophoton Technologies is all about bringing affordable,
                    brilliant and realistic solutions and ideas using over 200
                    man years of strong credentials and solid field experience.
                  </p>
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <div className="uk-tile uk-tile-muted">
                  <img
                    className="uk-align-center"
                    style={{ marginBottom: 2 + "px" }}
                    src="images/ppl.svg"
                    width="70"
                    height="70"
                    data-uk-svg
                  />
                  <p className="uk-text-lead uk-margin-remove-top">
                    We have an array of outstanding scientists from research
                    organizations, business professionals, practicing doctors,
                    academicians and a highly motivated work force to get the
                    work done.
                  </p>
                </div>
              </div>
              <div className="uk-width-1-1@m">
                <h2 className="uk-heading-primary uk-padding-small uk-padding-remove-horizontal uk-text-center">
                  For Biophoton, expertise is the beginning of innovation. And
                  innovation the solution to bring about change.
                </h2>
              </div>
              <div className="uk-width-expand@m">
                <div className="uk-tile uk-tile-muted">
                  <p className="uk-text-lead">
                    In order to stay connected with the technological
                    advancements and research ideas, Biophoton has associated
                    with leading academic institutes and research organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-padding-remove uk-section-default footer">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-2@m">
                <address>
                  <div className="uk-grid-collapse" uk-grid>
                    <div className="uk-width-1-2@s uk-padding-small">
                      <h5 className="uk-heading-line uk-light uk-padding-small uk-margin-remove-vertical uk-padding-remove-vertical">
                        Registered Office
                      </h5>
                      <p className="uk-padding-small uk-text-left uk-text-small uk-margin-remove-vertical uk-padding-remove-vertical">
                        <a
                          className="uk-link-reset uk-text-break"
                          href="https://goo.gl/maps/LKWtCfsvcaE2"
                        >
                          Biophoton Technologies Pvt. Ltd, 34/790B,
                          AARUSHI,Beena Anjumana Road, Edappally, Kochi - 682
                          024
                        </a>
                      </p>
                    </div>
                    <div className="uk-width-1-2@s uk-padding-small uk-margin-remove-top">
                      <h5 className="uk-heading-line uk-light uk-padding-small uk-margin-remove-vertical uk-padding-remove-vertical">
                        In house R & D Unit
                      </h5>
                      <p className="uk-padding-small uk-text-left uk-text-small uk-margin-remove-vertical uk-padding-remove-vertical">
                        <a
                          className="uk-link-reset uk-text-break"
                          href="https://goo.gl/maps/LKWtCfsvcaE2"
                        >
                          Kinfra Hitech Park, Opposite Govt Medical College,
                          H.M.T Colony P.O, Kalamassery, Kochi, Kerala, India -
                          683503
                        </a>
                      </p>
                      <p className="uk-padding-small uk-text-left uk-text-small uk-margin-remove-vertical uk-padding-remove-vertical">
                        +91 484 2110795
                      </p>
                    </div>
                  </div>
                </address>
              </div>
              <div className="uk-width-1-2@m uk-padding-small">
                <p className="uk-padding-small uk-text-left uk-text-small uk-margin-remove-vertical uk-padding-remove-vertical">
                  <a
                    href="mailto:drkrsnair@gmail.com?Subject=Hello%20Sir"
                    target="_top"
                  >
                    Email: drkrsnair@gmail.com
                  </a>
                </p>
                <p className="uk-padding-small uk-text-left uk-text-small uk-margin-remove-vertical uk-padding-remove-vertical">
                  Phone: 8086385385
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="uk-text-center uk-text-middle uk-text-small uk-padding-small uk-padding-remove-vertical uk-margin-remove-bottom">
              Made
              <span className="uk-icon uk-icon-image" />
              <a className="uk-link-reset" href="https://www.ancatag.com">
                Ancatag
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
