import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
// import forwardIcon from '../../assets/icons/forward-icon.svg';
// import Card from '../shared-ui/Card';
import axios from 'axios';
import Card from './Card';
import { Icon } from '@iconify/react';
// import Container from '../shared-ui/Container';

// Define the type for a product
// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   price: number;
// }

export interface slideProps {
  title: string;
  movies?: [];
  category?: [];
}

const FeaturedMovie = ({ title, movies, category }: slideProps) => {
  // State to hold the products and error message

  // Render product cards
  const renderCards = () => {
    return movies?.map((film: any) => (
      <Card key={film?.id} category={category} movie={film} />
    ));
  };

  return (
    <Flex>
      <Container p={0} maxW={`1306px`}>
        <Flex mb={5} justifyContent={`space-between`} alignItems={`center`}>
          <Text as={`h4`}>{title}</Text>
          <Flex color={`#BE123C`}>
            <Text>See more</Text>
            <Icon fontSize={`1.5rem`} icon={`octicon:chevron-right-12`} />
          </Flex>
        </Flex>

        <Flex py={2} w={`100%`}>
          {/* Conditional rendering based on error state */}
          {/* {error ? (
            <Box>Error: {error}</Box>
          ) : ( */}
          <Grid
            templateColumns={{
              base: `repeat(1, 1fr)`,
              md: `repeat(2, 1fr)`,
              lg: `repeat(3, 1fr)`,
              xl: `repeat(4, 1fr)`,
            }}
            w={`100%`}
            // templateColumns={{
            //   base: `repeat(1, 1fr)`,
            //   md: `repeat(2, 1fr)`,
            //   lg: `repeat(4, 1fr)`,
            // }}
            gap={`3rem`}
          >
            {renderCards()}
          </Grid>
          {/* )} */}
        </Flex>
      </Container>
    </Flex>
  );
};

export default FeaturedMovie;
