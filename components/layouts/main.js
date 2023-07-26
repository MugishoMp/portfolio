import React, { useContext } from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
// for the menu overlay
import { MenuContext } from '../../contexts/menuContext'; // Update the path
import OverlayMenu from '../overlayMenu';

function Main({ children, router }) {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,
                    initial-scale=1"
        />
        <title> Mugisho Mpozi - Homepage </title>
      </Head>

      <Navbar path={router.asPath} />

      <OverlayMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}

export default Main;
