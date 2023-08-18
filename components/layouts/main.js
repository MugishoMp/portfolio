import React, { useContext } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Navbar from '../navbar';
import { MenuContext } from '../../contexts/menuContext';
import OverlayMenu from '../overlayMenu';
import Footer from '../footer';
import Layout from './article';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

function Main({ children, router }) {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <PageContainer>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,
                    initial-scale=1"
        />
        <title>Mugisho Mpozi</title>
      </Head>

      <Navbar path={router.asPath} />

      <OverlayMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <MainContent>
        <Container maxW="container.md" pt={14} mb="4rem">
          <Layout title={router.asPath}>
            {children}
          </Layout>
        </Container>
      </MainContent>

      <Footer />
    </PageContainer>
  );
}

export default Main;
