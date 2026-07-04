import React from "react";
import Contact from "./Contact";

function Footer1() {
  return (
    <>
      <div
        style={{ marginBottom: "100px" }}
        className="container col-xl-10 col-xxl-8 px-4"
      >
        <div id="contact" className="row align-items-center g-lg-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1
              style={{
                color: "#6b8e23",
                textShadow: "0px 0px 10px rgba(50, 100, 50, 0.5)",
              }}
              className="display-4 fw-bold lh-1 poppins-bold mb-3"
            >
              Let's Stay Connected!
            </h1>

            <p className="poppins-regular col-lg-10 text-white fs-5">
              Feel free to connect with me for collaborations, projects, or any
              opportunities.
            </p>

            <div className="social-buttons">
              {/* GitHub */}
              <a
                href="https://github.com/ashutosh112233445"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button github"
              >
                <svg
                  className="cf-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2.5 0 19 19"
                >
                  <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1PCLat35jj/9"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button facebook"
              >
                <svg
                  version="1.1"
                  viewBox="0 0 310 310"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667h29.42c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                  </g>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ashutosh_chaurasia_15?igsh=MThzcjJiZWQzcHE2OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-button instagram"
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1C7.55 1 7.24 1.01 6.28 1.05 3.89 1.16 2.16 2.89 2.05 5.28 2.01 6.24 2 6.55 2 9s.01 2.76.05 3.72c.11 2.39 1.84 4.12 4.23 4.23.96.04 1.27.05 3.72.05s2.76-.01 3.72-.05c2.39-.11 4.12-1.84 4.23-4.23.04-.96.05-1.27.05-3.72s-.01-2.76-.05-3.72c-.11-2.39-1.84-4.12-4.23-4.23C12.76 1.01 12.45 1 10 1zm0 1.8c2.4 0 2.68.01 3.64.05 1.45.07 2.24.85 2.31 2.31.04.96.05 1.24.05 3.64s-.01 2.68-.05 3.64c-.07 1.45-.85 2.24-2.31 2.31-.96.04-1.24.05-3.64.05s-2.68-.01-3.64-.05c-1.45-.07-2.24-.85-2.31-2.31C3.81 11.68 3.8 11.4 3.8 9s.01-2.68.05-3.64c.07-1.45.85-2.24 2.31-2.31.96-.04 1.24-.05 3.64-.05zm0 2.2A4 4 0 1014 9a4 4 0 00-4-4zm0 1.8A2.2 2.2 0 117.8 9 2.2 2.2 0 0110 6.8zm4.6-2.4a.9.9 0 100 1.8.9.9 0 000-1.8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1;