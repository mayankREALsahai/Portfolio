// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 3rem 1.5rem;
  background: #ecf0f1;
  color: #34495e;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <AboutText>
        I’m Mayank, a full-stack developer passionate about building responsive, user-friendly applications. With a
        background in both frontend and backend technologies, I thrive on turning complex challenges into impactful 
        solutions. My journey has taken me from coding simple scripts to architecting scalable systems.
      </AboutText>
    </AboutSection>
  );
}

export default About;
