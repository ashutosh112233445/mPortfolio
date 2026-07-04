import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      site: "https://your-portfolio.vercel.app",
      repo: "https://github.com/ashutosh112233445/mPortfolio",
      techStack: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "EmailJS",
      ],
      duration: "July 2026",
      description:
        "Designed and developed a fully responsive personal portfolio website to showcase my skills, resume, experience, and projects. Integrated EmailJS for a working contact form and deployed the website online.",
    },
  ];

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

      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="container-repo">
            <div className="box p-4">
              <h2
                className="poppins-bold"
                style={{ color: "#75BEF9" }}
              >
                {project.title}
              </h2>

              <p className="text-light mt-3 poppins-regular">
                {project.description}
              </p>

              <p className="text-light">
                <strong>Duration:</strong> {project.duration}
              </p>

              <p className="text-light">
                <strong>Tech Stack:</strong>{" "}
                {project.techStack.join(", ")}
              </p>

              <div className="mt-4">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger me-3"
                >
                  Live Demo
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="custom-divider" />
    </div>
  );
}

export default Projects;