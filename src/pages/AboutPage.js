import React from "react";

export default function AboutPage() {
  return (
    <section class="about-area">
      <div class="container">
        <div class="d-flex about-me-wrap align-items-start gap-24">
          <div>
            <div class="about-image-box shadow-box">
              <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
              <div class="image-inner">
                <img src="assets/images/farhadggu2.jpg" alt="About Me" />
              </div>
            </div>
          </div>

          <div class="about-details">
            <h1 class="section-heading">
              <img src="assets/images/star-2.png" alt="Star" /> Self-summary{" "}
              <img src="assets/images/star-2.png" alt="Star" />
            </h1>
            <div class="about-details-inner shadow-box">
              <img src="assets/images/icon2.png" alt="Star" />
              <h1>Farhad Gharagozlou</h1>
              <p>
                I am Farhad Gharagozlou, a MERN Stack Developer and FrontEnd
                React/Vue Developer with a passion for graphic design. I am a
                Computer Engineering student as well. I was born on February 02
                2001, I began programming in beggining university.
              </p>
            </div>
          </div>
        </div>

        <div class="row mt-24">
          <div class="col-md-6">
            <div class="about-edc-exp about-experience shadow-box">
              <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
              <h3>EXPERIENCE</h3>

              <ul>
                <li>
                  <p class="date">2021 - 2023</p>
                  <h2>Front-End / MERN Developer</h2>
                  <p class="type">React JS / Next JS / Vue JS / NodeJS</p>
                </li>
                <li>
                  <p class="date">2020 - 2021</p>
                  <h2>Back-end Developer</h2>
                  <p class="type">Django</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-edc-exp about-education shadow-box">
              <img src="assets/images/bg1.png" alt="BG" class="bg-img" />
              <h3>EDUCATION / WORK</h3>

              <ul>
                <li>
                  <p class="date">Dec 2022 - Present</p>
                  <h2>
                    I joined Nahal Gasht as a Full-Time FrontEnd Developer.
                  </h2>
                  <br />
                </li>
                <li>
                  <p class="date">2019 - 2023</p>
                  <h2>Bachelor Degree in Computer Engineering</h2>
                  <p class="type">Islamic Azad University Karaj</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
