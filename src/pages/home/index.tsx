import { Box, Center, Container, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Hero } from '../../components/Hero';
import Carousel from '../../components/Carousel';
import FeaturedMovie from '../../components/FeaturedMovie';
import axios from 'axios';
import Loading from '../../components/Loading';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTJiNzQ0ZGM2NzI0MDU0ZTQ5YjI0ODQyOWFiOTM5OSIsInN1YiI6IjY0ZmVmNjU1NmEyMjI3MDBmZDFmODNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtffvFdTctsDOASu7ycbx2bJpwCI1Knl97866-ZzcIY',
  },
};

const Home = () => {
  const [moviePayloadPlaying, setMoviePayloadPlaying] = useState();
  const [moviePayload, setMoviePayload] = useState();
  const [categoryPayload, setCategoryPayload] = useState();
  const [isLoading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const [genreRes, movieRes, top] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/genre/movie/list`, options),
      axios.get(`https://api.themoviedb.org/3/movie/top_rated`, options),
      axios.get(`https://api.themoviedb.org/3/movie/now_playing`, options),
    ]);
    if (
      genreRes.status === 200 &&
      movieRes.status === 200 &&
      top.status === 200
    ) {
      setLoading(false);
      console.log(genreRes.data.genres);
      console.log(movieRes.data.results);
      setMoviePayload(movieRes?.data?.results.slice(0, 10));
      setCategoryPayload(genreRes?.data?.genres);
      setMoviePayloadPlaying(top?.data?.results);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect()

  return (
    <DefaultLayout>
      {isLoading ? (
        <Loading text={`Loading...`} />
      ) : (
        <Carousel movies={moviePayloadPlaying} />
      )}

      <Container p={{ base: 4, lg: 0 }} maxW={`1306px`} my={`10rem`}>
        {isLoading ? (
          <Loading text={`Loading...`} />
        ) : (
          <FeaturedMovie
            title="Featured Movies"
            category={categoryPayload}
            movies={moviePayload}
          />
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
