import React from 'react'; // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import { SharedButton } from './shared-button/Button';

interface data {
  movies?: Array<any>;
}

const Carousel = ({ movies }: data) => {
  // console.log(movies);

  const movieList = movies?.map((movie) => {
    return (
      <SwiperSlide
        key={movie?.id}
        style={{
          width: `100%`,
          height: `10rem`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <Box
          w={`100%`}
          h={`100%`}
          color={`white`}
          backgroundImage={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          bgPos={`center`}
          bgSize={`cover`}
          bgRepeat={`no-repeat`}
          overflow={`hidden`}
          _after={{
            pos: `absolute`,
            content: '""',
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            bg: `#00000050`,
          }}
        >
          <Container p={{ base: 4, lg: 0 }} mt={`10rem`} maxW={`1306px`}>
            <Box
              pos={`relative`}
              zIndex={1}
              textAlign={{ base: `center`, lg: `start` }}
              maxW={`500px`}
            >
              <Text as={`h2`}>{movie?.title}</Text>
              <Flex color={`white`} my={3} gap={`10rem`}>
                <Flex gap={5} alignItems={`center`}>
                  <Img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1694646082/hng/productize/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_ykrs84.png" />
                  <Text fontSize={`sm`}>86.0/100</Text>
                </Flex>
                <Flex gap={5} alignItems={`center`}>
                  <Img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1694646083/hng/productize/PngItem_1381056_1_tmacjg.png" />
                  <Text fontSize={`sm`}>97%</Text>
                </Flex>
              </Flex>
              <Text fontSize={`sm`}>{movie?.overview}</Text>
              <Box my={5}>
                <SharedButton
                  leftIcon={`heroicons-solid:play`}
                  text={'WATCH TRAILER'}
                  width={'200px'}
                  height={'36px'}
                  bgColor={'#BE123C'}
                  textColor={'white'}
                  borderRadius={'6px'}
                  fontSize={{ base: `sm`, lg: `md` }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {movieList}
    </Swiper>
  );
};

export default Carousel;
