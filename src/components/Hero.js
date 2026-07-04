import React from "react";
import Spiderman from "./Spiderman";
import Moonknight from "./Moonknight";

function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="slide-side col-12 col-sm-10 col-lg-6">
            <Spiderman />
          </div>

          <div className="slide-up col-lg-6">
            <h1
              style={{
                color: "#E23636",
                textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
              }}
              className="display-2 fw-bold lh-1 mb-3 poppins-bold"
            >
              Hey, I am
            </h1>

            <h1 className="display-3 fw-bold text-light lh-1 mb-3 poppins-bold">
              Ashutosh
            </h1>

            <p className="lead text-light poppins-bold">
              Your friendly neighbourhood developer!
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                className="shadow__btn text-decoration-none poppins-bold"
                href="#experience"
              >
                Experience
              </a>

              <a
                className="shadow__btn text-decoration-none poppins-bold"
                href="#projects"
              >
                Projects
              </a>
            </div>
          </div>
        </div>

        <hr className="custom-divider" />
      </div>

      {/* Moonknight */}

      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row-reverse align-items-center py-5">
          <div className="slide-up col-lg-6">
            <h1
              style={{
                color: "#E23636",
                textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
              }}
              className="display-3 fw-bold lh-1 mb-3 poppins-bold"
            >
              About Me
            </h1>

            <p className="text-light poppins-regular">
              Hi, I'm <strong>Ashutosh Chaurasia</strong>, a Computer Science
              student passionate about Web Development and Artificial
              Intelligence. I enjoy building responsive websites, learning new
              technologies, and solving real-world problems through code. I am
              currently improving my skills in React.js, JavaScript, and Java
              while working on personal projects to grow as a Full Stack
              Developer.
            </p>

            <p
              style={{ color: "rgb(117, 190, 249)" }}
              className="poppins-regular"
            >
              Like Moon Knight, I adapt to any challenge – bringing light to the
              darkest bugs.
            </p>
          </div>

          <div className="slide-side col-12 col-sm-10 col-lg-6">
            <Moonknight />
          </div>
        </div>

        <hr className="custom-divider" />
      </div>
    </>
  );
}

export default Hero;