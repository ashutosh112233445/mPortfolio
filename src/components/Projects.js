import React from "react";

function Projects() {
  return (
    <div id="projects" className="container py-5">
      <h1
        style={{
          color: "#E23636",
          textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
        }}
        className="text-center mb-5 display-3 fw-bold poppins-bold"
      >
        Projects
      </h1>

      <div className="container-repo">
        <div className="box p-5 text-center">
          <h2 className="text-light poppins-bold">
            🚀 Projects Coming Soon
          </h2>

          <p className="text-light mt-3 poppins-regular">
            I am currently working on exciting web development and AI projects.
            They will be added here soon.
          </p>

          <p
            className="mt-4 poppins-bold"
            style={{ color: "rgb(117, 190, 249)" }}
          >
            Stay tuned for upcoming projects!
          </p>
        </div>
      </div>

      <hr className="custom-divider" />
    </div>
  );
}

export default Projects;