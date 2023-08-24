import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main class="main-homepage">
      <header class="header-area">
        <div class="container">
          <div class="gx-row d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo">
              <img src="assets/images/logo.svg" alt="Logo" />
            </a>

            <nav class="navbar">
              <ul class="menu">
                <li class="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <Link to="/works">Works</Link>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <a href="contact.html" class="theme-btn">
                Let's talk
              </a>
            </nav>

            <a href="contact.html" class="theme-btn">
              Let's talk
            </a>

            <div class="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <section class="about-area">
        <div class="container">
          <div class="row">
            <div class="col-md-6" data-aos="zoom-in">
              <div class="about-me-box shadow-box">
                <a class="overlay-link" href="about.html"></a>
                <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                <div class="img-box">
                  <img src="assets/images/me.png" alt="About Me" />
                </div>
                <div class="infos">
                  <h4>I AM Frontend Developer</h4>
                  <h1>Farhad Gharagozlu</h1>
                  <p>
                  MERN Stack Developer and FrontEnd React/Vue developer with a passion for graphic design.
                  </p>
                  <a href="#" class="about-btn">
                    <img src="assets/images/icon.svg" alt="Button" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="about-credentials-wrap">
                <div data-aos="zoom-in">
                  <div class="banner shadow-box">
                    <div class="marquee">
                      <div>
                        <span>
                          LATEST WORK AND <b>FEATURED</b>{" "}
                          <img src="assets/images/star1.svg" alt="Star" />{" "}
                          LATEST WORK AND <b>FEATURED</b>{" "}
                          <img src="assets/images/star1.svg" alt="Star" />{" "}
                          LATEST WORK AND <b>FEATURED</b>{" "}
                          <img src="assets/images/star1.svg" alt="Star" />{" "}
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                          <img src="assets/images/star1.svg" alt="Star" />{" "}
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                          <img src="assets/images/star1.svg" alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="gx-row d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div class="about-crenditials-box info-box shadow-box h-full">
                      <a class="overlay-link" href="/credentials"></a>
                      <img
                        src="assets/images/bg1.png"
                        alt="BG"
                        class="bg-img"
                      />
                      <img src="assets/images/sign.png" alt="Sign" />
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="infos">
                          <h4>more about me</h4>
                          <h1>Credentials</h1>
                        </div>

                        <a href="credentials.html" class="about-btn">
                          <img src="assets/images/icon.svg" alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div data-aos="zoom-in">
                    <div class="about-project-box info-box shadow-box h-full">
                      <a class="overlay-link" href="/works"></a>
                      <img
                        src="assets/images/bg1.png"
                        alt="BG"
                        class="bg-img"
                      />
                      <img src="assets/images/my-works.png" alt="My Works" />
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="infos">
                          <h4>SHOWCASE</h4>
                          <h1>Projects</h1>
                        </div>

                        <a href="#" class="about-btn">
                          <img src="assets/images/icon.svg" alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-24">
            <div class="col-md-12">
              <div class="blog-service-profile-wrap d-flex gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="about-services-box info-box shadow-box h-full">
                    <a href="service.html" class="overlay-link"></a>
                    <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                    <div class="icon-boxes">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/images/mongodb.svg"
                          width="80px"
                          alt="logo"
                        />
                        <p>MongoDb</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/images/react.svg"
                          width="80px"
                          alt="logo"
                        />
                        <p>React JS</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/images/nextjs.svg"
                          width="80px"
                          alt="logo"
                        />
                        <p>Next JS</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/images/vuejs.svg"
                          width="80px"
                          alt="logo"
                        />
                        <p>Vue JS</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/images/nodejs.svg"
                          width="80px"
                          alt="logo"
                        />
                        <p>Node JS</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="infos">
                        <h4>Skills</h4>
                        <h1>Skills Detail</h1>
                      </div>

                      <a href="service.html" class="about-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in">
                  <div class="about-profile-box info-box shadow-box h-full">
                    <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                    <div class="inner-profile-icons shadow-box">
                      <div style={{}}>
                        <a href="#">
                          <img width="40px" src="assets/images/github.svg" alt="logo" />
                        </a>
                        <a style={{marginTop: "20px"}} href="#">
                          <img width="40px" src="assets/images/linkedin.svg" alt="logo" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img width="40px" src="assets/images/gmail.svg" alt="logo" />
                        </a>
                        <a style={{marginTop: "20px"}} href="#">
                          <img width="40px" src="assets/images/telegram.svg" alt="logo" />
                        </a>
                      </div>
                    </div>

                    <div class="d-flex align-items-center justify-content-between">
                      <div class="infos">
                        <h4>Stay with me</h4>
                        <h1>Connect</h1>
                      </div>

                      <a href="contact.html" class="about-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-24">
            <div class="col-md-6" data-aos="zoom-in">
              <div class="about-client-box info-box shadow-box">
                <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                <div class="clients d-flex align-items-start gap-24 justify-content-center">
                  <div class="client-item">
                    <h1>3</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>

                  <div class="client-item">
                    <h1>+5</h1>
                    <p>
                      Total <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="zoom-in">
              <div class="about-contact-box info-box shadow-box">
                <a class="overlay-link" href="contact.html"></a>
                <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                <img
                  src="assets/images/icon2.png"
                  alt="Icon"
                  class="star-icon"
                />
                <h1>
                  Let's <br />
                  work <span>together.</span>
                </h1>
                <a href="#" class="about-btn">
                  <img src="assets/images/icon.svg" alt="Button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer-area">
        <div class="container">
          <div class="footer-content text-center">
            <a href="index.html" class="logo">
              <img src="assets/images/logo.svg" alt="Logo" />
            </a>
            <ul class="footer-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <p class="copyright">
              &copy; All rights reserved by <span>WordPress River</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
