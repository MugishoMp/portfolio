import React from 'react';
import styled from '@emotion/styled';
import {
  FaLinkedin,
  FaGithub,
  FaPinterest,
} from 'react-icons/fa';

const StyledFooter = styled.footer`
  padding: 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex; /* Use flex to arrange links horizontally */
  justify-content: center; /* Center the links horizontally */
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const SocialLink = styled.a`
  margin: 0 1.0rem;
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <SocialLinks>
        <SocialLink
          href="https://nl.linkedin.com/in/mugisho-mpozi-a1a000175?trk=people_directory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://github.com/MugishoMp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.pinterest.com/mmpozi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </SocialLink>
      </SocialLinks>
      <div style={{ color: '#333' }}>
        &copy;
        {new Date().getFullYear()}
        &nbsp;
        Mugisho Mpozi
      </div>
    </StyledFooter>
  );
}

export default Footer;
