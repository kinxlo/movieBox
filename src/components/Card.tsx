import React, { useEffect } from 'react';
import { Box, Flex, Image, Img, Link, Stack, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

interface CardProps {
  movie: object | any;
  category?: [];
}

const Card: React.FC<CardProps> = ({ movie, category }: CardProps) => {
  const getCategory = category?.filter((cat: any) => {
    return cat?.id === movie?.genre_ids[0] || cat.id === movie?.genre_ids[1];
  });

  const showCat = getCategory?.map((gen: any) => {
    return (
      <Text key={gen?.id} mr={1} fontSize={`xs`}>
        {gen?.name},
      </Text>
    );
  });

  return (
    <Link to={`/movies/${movie.id}`} as={ReactLink}>
      <Flex
        data-testid="movie-card"
        flexDir={'column'}
        justifyContent={'start'}
        alignItems={'flex-start'}
        w={{ base: `100%`, lg: `250px` }}
        h={`513px`}
        cursor={'pointer'}
        // _hover={{ boxShadow: '5px 5px 5px #01010150', transform: 'scale(1.01)' }}
      >
        <Box
          border="1px solid #F3F2FB"
          // border={`1px solid red`}
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          mb=".75rem"
          width={`100%`}
          height={`370px`}
        >
          <Image
            data-testid="movie-poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`img`}
            w={'100%'}
            h={`100%`}
            objectFit={`contain`}
          />
        </Box>
        <Stack w={`100%`}>
          <Text
            data-testid="movie-release-date"
            color={`#9CA3AF`}
            fontWeight={`bold`}
            fontSize={`xs`}
          >
            {movie.release_date.slice(0, 4)}
          </Text>
          <Box>
            <Text
              data-testid="movie-title"
              lineHeight={`short`}
              fontWeight={`bold`}
              fontSize={`lg`}
            >
              {movie.title}
            </Text>
            <Flex mt={3} justifyContent={`space-between`}>
              <Flex gap={1} alignItems={`center`}>
                <Img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1694646082/hng/productize/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_ykrs84.png" />
                <Text fontSize={`xs`}>760/100</Text>
              </Flex>
              <Flex gap={1} alignItems={`center`}>
                <Img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1694646083/hng/productize/PngItem_1381056_1_tmacjg.png" />
                <Text fontSize={`xs`}>760/100</Text>
              </Flex>
            </Flex>
            <Flex color={`#9CA3AF`} my={5}>
              {showCat}
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Link>
  );
};

export default Card;
