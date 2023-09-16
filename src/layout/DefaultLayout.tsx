import React, { ReactNode } from 'react';
import { Navbar } from './ui-navbar/Navbar';
import Footer from './Footer';
import { Box, Container } from '@chakra-ui/react';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Box pos={`fixed`} width={`100%`} zIndex={999}>
        <Navbar />
      </Box>
      {children}
      <Container px={{ base: 4, lg: 0 }} maxW={`1360px`} my={`10rem`}>
        <Footer />
      </Container>
    </>
  );
};

export default DefaultLayout;
