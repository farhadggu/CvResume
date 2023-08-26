import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";

export default function HomePage() {
  const [latestCommit, setLatestCommit] = useState([]);

  useEffect(() => {
    const fetchLatestCommit = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/farhadggu/repos",
          {
            headers: {
              Authorization: "Bearer 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",
            },
          }
        );
        if (response.data && response.data.length > 0) {
          setLatestCommit(
            response.data
              .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .slice(0, 3)
          );
        }
      } catch (error) {
        console.error("Error fetching latest commit:", error);
      }
    };

    fetchLatestCommit();
  }, []);

  return (
    <section class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about-me-box shadow-box">
              <Link class="overlay-link" to="/about"></Link>
              <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
              <div class="img-box">
                <img src="assets/images/farhadggu.jpg" alt="About Me" />
              </div>
              <div class="infos">
                <h4>I AM Frontend Developer</h4>
                <h1>Farhad Gharagozlu</h1>
                <p>
                  MERN Stack Developer and FrontEnd React/Vue developer with a
                  passion for graphic design.
                </p>
                <Link to="/about" class="about-btn">
                  <img src="assets/images/icon.svg" alt="Button" />
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="about-credentials-wrap">
              <div>
                <div class="banner shadow-box">
                  <div class="marquee">
                    <div>
                      <span>
                        <b>GITHUB COMMITS</b>{" "}
                        <img src="assets/images/star1.svg" alt="Star" />{" "}
                        {latestCommit?.map((item, index) => (
                          <React.Fragment key={index}>
                            {index == 0
                              ? "FIRST"
                              : index == 1
                              ? "SECOND"
                              : index == 2
                              ? "THIRD"
                              : ""}{" "}
                            LATEST COMMIT <b>{item.name}</b>{" "}
                            <img src="assets/images/star1.svg" alt="Star" />{" "}
                          </React.Fragment>
                        ))}
                        <b>GITHUB COMMITS</b>{" "}
                        <img src="assets/images/star1.svg" alt="Star" />{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gx-row d-flex gap-24">
                <div>
                  <div class="about-crenditials-box info-box shadow-box h-full">
                    <Link class="overlay-link" to="/credentials"></Link>
                    <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                    <img src="assets/images/sign.png" alt="Sign" />
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="infos">
                        <h4>more about me</h4>
                        <h1>AboutMe!</h1>
                      </div>

                      <a href="credentials.html" class="about-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="about-project-box info-box shadow-box h-full">
                    <a class="overlay-link" href="/works"></a>
                    <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
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
              <div class="flex-1">
                <div class="about-services-box info-box shadow-box h-full">
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
                  </div>
                </div>
              </div>

              <div>
                <div class="about-profile-box info-box shadow-box h-full">
                  <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
                  <div class="inner-profile-icons shadow-box">
                    <div>
                      <a href="https://github.com/farhadggu">
                        <img
                          width="40px"
                          src="assets/images/github.svg"
                          alt="logo"
                        />
                      </a>
                      <a
                        style={{ marginTop: "20px" }}
                        href="https://www.linkedin.com/in/farhad-gharagozlu-5329211b5/"
                      >
                        <img
                          width="40px"
                          src="assets/images/linkedin.svg"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="mailto:farhadggu@gmail.com">
                        <img
                          width="40px"
                          src="assets/images/gmail.svg"
                          alt="logo"
                        />
                      </a>
                      <a
                        style={{ marginTop: "20px" }}
                        href="https://t.me/mr_farhad79"
                      >
                        <img
                          width="40px"
                          src="assets/images/telegram.svg"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>

                  <div class="d-flex align-items-center justify-content-between">
                    <div class="infos">
                      <h4>Stay with me</h4>
                      <h1>Connect</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-24">
          <div class="col-md-6">
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
          <div class="col-md-6">
            <div class="about-contact-box info-box shadow-box">
              <a class="overlay-link" href="https://t.me/mr_farhad79"></a>
              <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
              <img src="assets/images/icon2.png" alt="Icon" class="star-icon" />
              <h1>
                Let's <br />
                work <span>together.</span>
              </h1>
              <a href="https://t.me/mr_farhad79" class="about-btn">
                <img width="40px" src="assets/images/telegram.svg" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
