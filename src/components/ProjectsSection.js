import React from 'react';

function ProjectsSection() {
  return (
    <section className="projects-section section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-card">
        <h3 className="project-title">DevOps Portfolio Deployment</h3>
        <p className="project-description">
          Deployed a React portfolio app to AWS S3 + CloudFront using GitHub Actions and OIDC.
        </p>
      </div>
      <div className="project-card" data-aos="fade-left">
        <h3 className="project-title">CI/CD Pipeline</h3>
        <p className="project-description">
          Built automated CI/CD workflows for multiple environments using Terraform and GitHub Actions.
        </p>
      </div>
    </section>
  );
}

export default ProjectsSection;
