import React from "react";
import loki from "../images/loki.png";

function Experience() {
  return (
    <div id="experience" className="container py-5">
      <h1
        style={{
          textShadow: "0px 0px 10px rgba(29, 185, 84, 0.9)",
          color: "#1DB954",
        }}
        className="slide-side text-center mb-5 display-3 fw-bold lh-1 poppins-bold"
      >
        Experience
      </h1>

      <div className="timeline-cap">
        <img src={loki} alt="Loki" className="loki-image" />
      </div>

      <div className="slide-up timeline">
        <div className="timeline-item">
          <div className="timeline-content loki-card">
            <h2 className="timeline-title poppins-bold">
              Artificial Intelligence Summer Training
            </h2>

            <p className="location poppins-bold">
              IBM Artificial Intelligence Summer Training
            </p>

            <p className="duration poppins-bold">
              Summer 2026
            </p>

            <p>
              • Completed a Summer Training Program focused on Artificial
              Intelligence and Machine Learning fundamentals.
            </p>

            <p>
              • Learned Python, data preprocessing, machine learning concepts,
              and AI model development.
            </p>

            <p>
              • Built mini AI projects and gained hands-on experience with real
              world problem-solving.
            </p>

            <p>
              • Improved analytical thinking, teamwork, and technical skills
              through practical assignments.
            </p>
          </div>
        </div>
      </div>

      <hr className="custom-divider" />
    </div>
  );
}

export default Experience;