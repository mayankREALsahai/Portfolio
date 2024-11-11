// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 3rem 1.5rem;
  background: #34495e;
  color: #ecf0f1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.div`
  background: #2C3E50;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

function Projects() {
  const projects = [
    { name: 'Real-Time Chat App', description: 'A messaging app with room-based chat functionality.' },
    { name: 'Portfolio Website', description: 'A professional personal portfolio to showcase projects and skills.' },
    { name: 'E-commerce App', description: 'A full-stack e-commerce platform with user authentication and payment integration.' },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;
    