import React from "react";

const Content: React.FC = () => {
  return (
    <>
    <section id="home-section" className="hero">
    <h3 className="vr">Welcome to SoftData</h3>
    <div className="home-slider js-fullheight">
      <div className="slider-item js-fullheight">
        <div className="overlay"></div>
        <div className="container-fluid p-0">
          <div
            className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <div className="one-third order-md-last img js-fullheight">
              <div className="overlay"></div>
            </div>
            <div
              className="one-forth d-flex js-fullheight align-items-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div className="text">
                <span className="subheading">Welcome to the softdata</span>
                <h1 className="mb-4 mt-3">
                  Small Details Make A Big <span>Impression</span>
                </h1>
                <p>
                  A small river named Duden flows by their place and
                  supplies it with the necessary regelialia. It is a
                  paradisematic country.
                </p>

                <p>
                  <a href="#" className="btn btn-primary px-5 py-3 mt-3">
                    Get in touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-item js-fullheight">
        <div className="overlay"></div>
        <div className="container-fluid p-0">
          <div
            className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <div className="one-third order-md-last img js-fullheight">
              <div className="overlay"></div>
            </div>
            <div
              className="one-forth d-flex js-fullheight align-items-center "
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div className="text">
                <span className="subheading">Welcome to the softdata</span>
                <h1 className="mb-4 mt-3">
                  <span>Strategic</span> Design And <span>Technology</span>{" "}
                  Agency
                </h1>
                <p>
                  A small river named Duden flows by their place and
                  supplies it with the necessary regelialia. It is a
                  paradisematic country.
                </p>

                <p>
                  <a href="#" className="btn btn-primary px-5 py-3 mt-3">
                    Get in touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="ftco-section ftco-no-pb ftco-no-pt ftco-services bg-light"
    id="services-section"
  >
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-4 py-5 nav-link-wrap">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link px-4 active"
              id="v-pills-1-tab"
              data-toggle="pill"
              href="#v-pills-1"
              role="tab"
              aria-controls="v-pills-1"
              aria-selected="true"
            >
              <span className="mr-3 flaticon-ideas"></span> Business
              Strategy
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-2-tab"
              data-toggle="pill"
              href="#v-pills-2"
              role="tab"
              aria-controls="v-pills-2"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-flasks"></span> Research
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-3-tab"
              data-toggle="pill"
              href="#v-pills-3"
              role="tab"
              aria-controls="v-pills-3"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-analysis"></span> Data Analysis
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-4-tab"
              data-toggle="pill"
              href="#v-pills-4"
              role="tab"
              aria-controls="v-pills-4"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-web-design"></span> UI Design
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-4-tab"
              data-toggle="pill"
              href="#v-pills-4"
              role="tab"
              aria-controls="v-pills-4"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-ux-design"></span> Ux Design
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-5-tab"
              data-toggle="pill"
              href="#v-pills-5"
              role="tab"
              aria-controls="v-pills-5"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-innovation"></span> Technology
            </a>

            <a
              className="nav-link px-4"
              id="v-pills-6-tab"
              data-toggle="pill"
              href="#v-pills-6"
              role="tab"
              aria-controls="v-pills-6"
              aria-selected="false"
            >
              <span className="mr-3 flaticon-idea"></span> Creative
            </a>
          </div>
        </div>
        <div className="col-md-8 p-4 p-md-5 d-flex align-items-center">
          <div className="tab-content pl-md-5" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active py-5"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="v-pills-1-tab"
            >
              <span className="icon mb-3 d-block flaticon-ideas"></span>
              <h2 className="mb-4">Business Strategy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-2"
              role="tabpanel"
              aria-labelledby="v-pills-2-tab"
            >
              <span className="icon mb-3 d-block flaticon-flasks"></span>
              <h2 className="mb-4">Research</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-3"
              role="tabpanel"
              aria-labelledby="v-pills-3-tab"
            >
              <span className="icon mb-3 d-block flaticon-analysis"></span>
              <h2 className="mb-4">Data Analysis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-4"
              role="tabpanel"
              aria-labelledby="v-pills-4-tab"
            >
              <span className="icon mb-3 d-block flaticon-web-design"></span>
              <h2 className="mb-4">UI Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-4"
              role="tabpanel"
              aria-labelledby="v-pills-4-tab"
            >
              <span className="icon mb-3 d-block flaticon-ux-design"></span>
              <h2 className="mb-4">Ux Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-5"
              role="tabpanel"
              aria-labelledby="v-pills-5-tab"
            >
              <span className="icon mb-3 d-block flaticon-innovation"></span>
              <h2 className="mb-4">Technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>

            <div
              className="tab-pane fade py-5"
              id="v-pills-6"
              role="tabpanel"
              aria-labelledby="v-pills-6-tab"
            >
              <span className="icon mb-3 d-block flaticon-idea"></span>
              <h2 className="mb-4">Creative Solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt voluptate, quibusdam sunt iste dolores consequatur
              </p>
              <p>
                Inventore fugit error iure nisi reiciendis fugiat illo
                pariatur quam sequi quod iusto facilis officiis nobis sit
                quis molestias asperiores rem, blanditiis! Commodi
                exercitationem vitae deserunt qui nihil ea, tempore et quam
                natus quaerat doloremque.
              </p>
              <p>
                <a href="#" className="btn btn-primary px-4 py-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="ftco-section-2 img"
    style={{ backgroundImage: `url(${"images/bg_3.jpg"})` }}
  >
    <div className="container">
      <div className="row d-md-flex justify-content-end">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="services-wrap ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="ion-ios-arrow-back"></span>
                  <span className="ion-ios-arrow-forward"></span>
                </div>
                <h2>Market Research</h2>
                <p>
                  Even the all-powerful Pointing has no control about the
                  blind.
                </p>
              </a>
              <a href="#" className="services-wrap ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="ion-ios-arrow-back"></span>
                  <span className="ion-ios-arrow-forward"></span>
                </div>
                <h2>Financial Services</h2>
                <p>
                  Even the all-powerful Pointing has no control about the
                  blind.
                </p>
              </a>
              <a href="#" className="services-wrap ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="ion-ios-arrow-back"></span>
                  <span className="ion-ios-arrow-forward"></span>
                </div>
                <h2>Online Marketing</h2>
                <p>
                  Even the all-powerful Pointing has no control about the
                  blind.
                </p>
              </a>
              <a href="#" className="services-wrap ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="ion-ios-arrow-back"></span>
                  <span className="ion-ios-arrow-forward"></span>
                </div>
                <h2>24/7 Help &amp; Support</h2>
                <p>
                  Even the all-powerful Pointing has no control about the
                  blind.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="ftco-section ftco-project bg-light"
    id="projects-section"
  >
    <div className="container px-md-5">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ">
          <span className="subheading">Accomplishments</span>
          <h2 className="mb-4">Our Projects</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 testimonial">
          <div className="carousel-project owl-carousel">
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-1.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-2.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-3.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-4.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-5.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project">
                <div className="img">
                  <img
                    src="images/project-6.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  ></img>
                  <div className="text px-4">
                    <h3>
                      <a href="#">Work Name</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="ftco-counter img ftco-section ftco-no-pt ftco-no-pb"
    id="about-section"
  >
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 col-lg-5 d-flex">
          <div
            className="img d-flex align-self-stretch align-items-center"
            style={{ backgroundImage: `url(${"images/about.jpg"})` }}
          ></div>
        </div>
        <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
          <div className="py-md-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ">
                <span className="subheading">Welcome to softdata</span>
                <h2 className="mb-4" style={{ fontSize: "34px" }}>
                  We Are Digital Agency
                </h2>
                <p>
                  A small river named Duden flows by their place and
                  supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences
                  fly into your mouth.
                </p>
                <p>
                  Even the all-powerful Pointing has no control about the
                  blind texts it is an almost unorthographic life One day
                  however a small line of blind text by the name of Lorem
                  Ipsum decided to leave for the far World of Grammar.
                </p>
                <p>
                  A small river named Duden flows by their place and
                  supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences
                  fly into your mouth.
                </p>
              </div>
            </div>
            <div className="counter-wrap  d-flex mt-md-3">
              <div className="text p-4 bg-primary">
                <p className="mb-0">
                  <span className="number" data-number="20">
                    0
                  </span>
                  <span>Years of experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-6 heading-section text-center ">
          <span className="subheading">About Us</span>
          <h2 className="mb-4">Our Staff</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 ">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: `url(${"images/staff-1.jpg"})` }}
              ></div>
            </div>
            <div className="text d-flex align-items-center pt-3 text-center">
              <div>
                <h3 className="mb-2">Lloyd Wilson</h3>
                <span className="position mb-4">CEO, Founder</span>
                <div className="faded">
                  <ul className="ftco-social text-center">
                    <li className="">
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: `url(${"images/staff-2.jpg"})` }}
              ></div>
            </div>
            <div className="text d-flex align-items-center pt-3 text-center">
              <div>
                <h3 className="mb-2">Rachel Parker</h3>
                <span className="position mb-4">Web Designer</span>
                <div className="faded">
                  <ul className="ftco-social text-center">
                    <li className="">
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: `url(${"images/staff-3.jpg"})` }}
              ></div>
            </div>
            <div className="text d-flex align-items-center pt-3 text-center">
              <div>
                <h3 className="mb-2">Ian Smith</h3>
                <span className="position mb-4">Web Developer</span>
                <div className="faded">
                  <ul className="ftco-social text-center">
                    <li className="">
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: `url(${"images/staff-4.jpg"})` }}
              ></div>
            </div>
            <div className="text d-flex align-items-center pt-3 text-center">
              <div>
                <h3 className="mb-2">Alicia Henderson</h3>
                <span className="position mb-4">Graphic Designer</span>
                <div className="faded">
                  <ul className="ftco-social text-center">
                    <li className="">
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="ftco-section testimony-section"
    id="testimony-section"
  >
    <div className="container">
      <div className="row justify-content-center pb-3">
        <div className="col-md-7 text-center heading-section heading-section-white ">
          <h2 className="mb-4">Happy Clients</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="carousel-testimony ftco-owl">
            <div className="item">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img"
                  style={{
                    backgroundImage: `url(${"images/person_1.jpg"})`
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text px-4 pb-5">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">John Fox</p>
                  <span className="position">Businessman</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img"
                  style={{
                    backgroundImage: `url(${"images/person_2.jpg"})`
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text px-4 pb-5">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">John Fox</p>
                  <span className="position">Businessman</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img"
                  style={{
                    backgroundImage: `url(${"images/person_2.jpg"})`
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text px-4 pb-5">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">John Fox</p>
                  <span className="position">Businessman</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img"
                  style={{
                    backgroundImage: `url(${"images/person_2.jpg"})`
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text px-4 pb-5">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">John Fox</p>
                  <span className="position">Businessman</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap text-center py-4 pb-5">
                <div
                  className="user-img"
                  style={{
                    backgroundImage: `url(${"images/person_2.jpg"})`
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text px-4 pb-5">
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">John Fox</p>
                  <span className="position">Businessman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section bg-light" id="blog-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 heading-section text-center ">
          <span className="subheading">Blog</span>
          <h2 className="mb-4">Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <a
              href="single.html"
              className="block-20"
              style={{ backgroundImage: `url(${"images/image_1.jpg"})` }}
            ></a>
            <div className="text mt-3 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4 topp">
                <div className="one mr-2">
                  <span className="day">12</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">March</span>
                </div>
              </div>
              <h3 className="heading">
                <a href="single.html">
                  Why Lead Generation is Key for Business Growth
                </a>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies
                it with the necessary regelialia.
              </p>
              <div className="d-flex align-items-center mt-4 meta">
                <p className="mb-0">
                  <a href="#" className="btn btn-primary">
                    Read More{" "}
                    <span className="ion-ios-arrow-round-forward"></span>
                  </a>
                </p>
                <p className="ml-auto mb-0">
                  <a href="#" className="mr-2">
                    Admin
                  </a>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat"></span> 3
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <a
              href="single.html"
              className="block-20"
              style={{ backgroundImage: `url(${"images/image_2.jpg"})` }}
            ></a>
            <div className="text mt-3 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4 topp">
                <div className="one mr-2">
                  <span className="day">10</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">March</span>
                </div>
              </div>
              <h3 className="heading">
                <a href="single.html">
                  Why Lead Generation is Key for Business Growth
                </a>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies
                it with the necessary regelialia.
              </p>
              <div className="d-flex align-items-center mt-4 meta">
                <p className="mb-0">
                  <a href="#" className="btn btn-primary">
                    Read More{" "}
                    <span className="ion-ios-arrow-round-forward"></span>
                  </a>
                </p>
                <p className="ml-auto mb-0">
                  <a href="#" className="mr-2">
                    Admin
                  </a>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat"></span> 3
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry">
            <a
              href="single.html"
              className="block-20"
              style={{ backgroundImage: `url(${"images/image_3.jpg"})` }}
            ></a>
            <div className="text mt-3 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4 topp">
                <div className="one mr-2">
                  <span className="day">05</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">March</span>
                </div>
              </div>
              <h3 className="heading">
                <a href="single.html">
                  Why Lead Generation is Key for Business Growth
                </a>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies
                it with the necessary regelialia.
              </p>
              <div className="d-flex align-items-center mt-4 meta">
                <p className="mb-0">
                  <a href="#" className="btn btn-primary">
                    Read More{" "}
                    <span className="ion-ios-arrow-round-forward"></span>
                  </a>
                </p>
                <p className="ml-auto mb-0">
                  <a href="#" className="mr-2">
                    Admin
                  </a>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat"></span> 3
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section contact-section ftco-no-pb"
    id="contact-section"
  >
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ">
          <span className="subheading">Contact</span>
          <h2 className="mb-4">Contact Us</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div className="row d-flex contact-info mb-5">
        <div className="col-md-6 col-lg-3 d-flex ">
          <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-map-signs"></span>
            </div>
            <h3 className="mb-4">Address</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex ">
          <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-phone2"></span>
            </div>
            <h3 className="mb-4">Contact Number</h3>
            <p>
              <a href="tel://1234567920">+ 1235 2355 98</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex ">
          <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-paper-plane"></span>
            </div>
            <h3 className="mb-4">Email Address</h3>
            <p>
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex ">
          <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-globe"></span>
            </div>
            <h3 className="mb-4">Website</h3>
            <p>
              <a href="#">yoursite.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row no-gutters block-9">
        <div className="col-md-6 order-md-last d-flex">
          <form action="#" className="bg-light p-5 contact-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                cols={30}
                rows={5}
                id=""
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 d-flex">
          <div id="map" className="bg-white"></div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Content;
