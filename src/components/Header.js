// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: #2C3E50;
  color: #ecf0f1;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.5rem 0;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Name>Mayank Sahai</Name>
      <Title>Full Stack Developer & Technology Enthusiast</Title>
      <SocialLinks>
        <SocialLink href="https://in.linkedin.com/in/mayank-sahai-2b9306262?trk=people-guest_people_search-card" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://github.com/mayankREALsahai" target="_blank">GitHub</SocialLink>
      </SocialLinks>
    </HeaderContainer>
  );
}

export default Header;
