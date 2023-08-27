import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = (url) => {
      setLoading(false);
    };

    window.addEventListener("routeChangeStart", handleRouteChangeStart);
    window.addEventListener("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("routeChangeStart", handleRouteChangeStart);
      window.removeEventListener(
        "routeChangeComplete",
        handleRouteChangeComplete
      );
    };
  }, []);

  return (
    <main>
      <header class="header-area">
        <div class="container">
          <div class="gx-row d-flex align-items-center justify-content-between">
            <Link
              to="/"
              style={{
                color: "#fff",
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto 0",
              }}
              class="logo"
            >
              FarhadGGU
            </Link>

            <nav class="navbar">
              <ul class="menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Me!</Link>
                </li>
                <li>
                  <Link to="/works">Projects</Link>
                </li>
              </ul>
            </nav>

            <a
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 10px",
              }}
              href="https://t.me/mr_farhad79"
              class="theme-btn"
            >
              Let's talk
              <img width="20px" src="assets/images/telegram.svg" alt="logo" />
            </a>

            <div class="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer class="footer-area">
        <div class="container">
          <div class="footer-content text-center">
            <Link
              style={{ color: "#fff", fontSize: "22px", paddingTop: "10px" }}
              to="/"
              class="logo"
            >
              FarhadGGU
            </Link>
            <ul class="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
