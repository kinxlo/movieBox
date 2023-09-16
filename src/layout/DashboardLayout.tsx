import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Select,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, Link as ReactLink, useParams } from 'react-router-dom';
// import { Sidenav } from './Sidebar';
import Links from './ui-navbar/NavigationLinks';
import { SharedButton } from '../components/shared-button/Button';
import { Icon } from '@iconify/react';
import { Navbar } from './ui-navbar/Navbar';
import axios from 'axios';
import Loading from '../components/Loading';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTJiNzQ0ZGM2NzI0MDU0ZTQ5YjI0ODQyOWFiOTM5OSIsInN1YiI6IjY0ZmVmNjU1NmEyMjI3MDBmZDFmODNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtffvFdTctsDOASu7ycbx2bJpwCI1Knl97866-ZzcIY',
  },
};

const DashboardLayout = () => {
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  const [payload, setPayload] = useState<any>();

  const getData = useCallback(async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    if (res.status === 200) {
      setLoading(false);
      setPayload(res?.data);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(payload);

  return (
    <>
      <Box display={{ base: `block`, md: `none` }}>
        <Navbar />
      </Box>
      <Flex>
        <Flex
          pos={`sticky`}
          top={0}
          flexDir={`column`}
          borderTopRightRadius={`5rem`}
          borderBottomRightRadius={`5rem`}
          height={`100vh`}
          minW={`20rem`}
          border={`1px solid #01010150`}
          display={{ base: `none`, lg: `flex` }}
        >
          <Box my={5} w={`100%`}>
            <Link as={ReactLink} to={`/`}>
              <Image
                alt="logo"
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694858265/Logo_1_naatxp.png`}
              />
            </Link>
          </Box>
          <Box>
            <Links isMobile={true} />
            {/* banner */}
            <Box
              background={`rgba(248, 231, 235, 0.40)`}
              borderRadius={`20px`}
              p={`20px 16px`}
              border={`1px solid #BE123C`}
              w={`186px`}
              m={`3rem auto`}
            >
              <Text
                color={`#333333CC`}
                fontWeight={`bold`}
                className={`small_text`}
              >
                Play movie quizes and earn free tickets
              </Text>
              <Text className={`tiny_text`} color={`grey.400`}>
                50k people are playing now
              </Text>
              <Box mt={5} w={`100%`}>
                <SharedButton
                  text={'Start playing'}
                  width={`100%`}
                  height={'30px'}
                  bgColor={'rgba(190, 18, 60, 0.20)'}
                  textColor={'#BE123C'}
                  borderRadius={'30px'}
                  fontSize={{ base: `sm` }}
                />
              </Box>
            </Box>
            <NavLink to={``} style={{ borderRight: `3px solid transparent` }}>
              <Flex
                py={5}
                w={`186px`}
                fontSize={`20px`}
                color={`#666`}
                gap={5}
                alignItems={`center`}
              >
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694882612/Logout_s6jpo0.png`}
                  alt={`img`}
                />
                <Text fontSize={`20px`} color={`#666`}>{`Logout`}</Text>
              </Flex>
            </NavLink>
          </Box>
        </Flex>
        {isLoading ? (
          <Loading text={`Loading...`} />
        ) : (
          <Flex flexDir={`column`} w={`100%`} padding={10}>
            <Box
              pos={`relative`}
              borderRadius={`20px`}
              backgroundColor={`coral.100`}
              w={`100%`}
              height={{ base: `10rem`, md: `450px` }}
              backgroundImage={`https://image.tmdb.org/t/p/original/${payload?.backdrop_path}`}
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
              <Center
                pos={`relative`}
                zIndex={1}
                height={`100%`}
                gap={5}
                flexDir={`column`}
              >
                <Center
                  cursor={`pointer`}
                  borderRadius={`100%`}
                  w={`100px`}
                  h={`100px`}
                  bgColor={`#E8E8E833`}
                  fontSize={`xxx-large`}
                  color={`white`}
                >
                  <Icon icon={'fluent:play-32-filled'} />
                </Center>
                <Text cursor={`pointer`} color={`white`} as={`h5`}>
                  Watch Trailer
                </Text>
              </Center>
            </Box>
            {/* details */}
            <Flex
              my={10}
              flexDir={{ base: `column`, md: `row` }}
              justifyContent={`space-between`}
            >
              <Flex
                flexDir={{ base: `column`, md: `row` }}
                gap={5}
                alignItems={{ base: `flex-start`, md: `center` }}
              >
                <Flex alignItems={`center`} gap={5}>
                  <Text as={`h5`} data-testid="movie-title">
                    {payload?.title}
                  </Text>
                  <Text as={`h5`} data-testid="movie-release-date">
                    {payload?.release_date.slice(0, 4)}
                  </Text>
                  <Text as={`h5`} data-testid="movie-runtime">
                    {payload?.runtime}mins
                  </Text>
                </Flex>
                <Flex gap={5}>
                  <Tag
                    variant={`unstyled`}
                    border={`1px solid #BE123C50`}
                    color={`#BE123C`}
                    size={{ base: `sm`, md: `lg` }}
                    borderRadius="full"
                  >
                    {payload?.genres[0]?.name}
                  </Tag>
                  <Tag
                    variant={`unstyled`}
                    border={`1px solid #BE123C50`}
                    color={`#BE123C`}
                    size={{ base: `sm`, md: `lg` }}
                    borderRadius="full"
                  >
                    {payload?.genres[1]?.name}
                  </Tag>
                </Flex>
              </Flex>
              <Flex gap={3} alignItems={`center`}>
                <Flex gap={1} fontSize={`xx-large`} alignItems={`center`}>
                  <Box
                    cursor={`pointer`}
                    color={`grey.300`}
                    _hover={{ color: `yellow.200` }}
                  >
                    <Icon icon={`ph:star-fill`} />
                  </Box>
                  <Text as={`h5`} color={`grey.400`}>
                    8.5
                  </Text>
                </Flex>
                |{' '}
                <Text as={`h5`} color={`black`}>
                  350k
                </Text>
              </Flex>
            </Flex>
            {/* grid */}
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(12, 1fr)',
              }}
              gap={6}
            >
              <GridItem colSpan={{ base: 12, md: 8 }} w="100%">
                <Text data-testid="movie-overview" fontWeight={500}>
                  {payload?.overview}
                </Text>
                <Stack w={`100%`} gap={5} my={5}>
                  <Flex alignItems={`center`}>
                    <Text as={`h6`} fontWeight={500}>
                      Director:
                    </Text>
                    <Text as={`h6`} fontWeight={500} color={`#BE123C`}>
                      Joseph Kosinski
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text as={`h6`} fontWeight={500}>
                      Writers:
                    </Text>
                    <Text as={`h6`} fontWeight={500} color={`#BE123C`}>
                      Joseph Kosinski
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text as={`h6`} fontWeight={500}>
                      Stars:
                    </Text>
                    <Text as={`h6`} fontWeight={500} color={`#BE123C`}>
                      Joseph Kosinski
                    </Text>
                  </Flex>
                </Stack>
                <Flex flexDir={{ base: `column`, md: `row` }}>
                  <Tag
                    pos={`relative`}
                    zIndex={1}
                    mr={-1}
                    color={`white`}
                    bgColor={`#BE123C`}
                    width={{ base: `100%`, md: `15rem` }}
                    size={`lg`}
                  >
                    Top rated movie #65
                  </Tag>
                  <Select
                    disabled
                    placeholder="Awards 9 nominations"
                    size="lg"
                  />
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 12, md: 4 }} w="100%">
                <Stack w={`100%`}>
                  <Link as={ReactLink} to={`/404`}>
                    <SharedButton
                      leftIcon={`la:tags`}
                      text={'See Showtimes'}
                      width={'100%'}
                      height={'55px'}
                      bgColor={'#BE123C'}
                      textColor={'white'}
                      borderRadius={'10px'}
                      fontSize={{ base: `sm`, md: `md` }}
                    />
                  </Link>
                  <Link as={ReactLink} to={`/404`}>
                    <SharedButton
                      leftIcon={`uiw:menu`}
                      text={'More watch options'}
                      width={'100%'}
                      height={'55px'}
                      bgColor={'#BE123C1A'}
                      textColor={'black'}
                      borderRadius={'10px'}
                      border="1px solid #BE123C"
                      fontSize={{ base: `sm`, md: `md` }}
                    />
                  </Link>
                </Stack>
                <Flex
                  pos={`relative`}
                  borderRadius={`10px`}
                  overflow={`hidden`}
                  height={`230px`}
                  my={5}
                  gap={1}
                >
                  <Box flex={1}>
                    <Image
                      h={`100%`}
                      objectFit={`cover`}
                      src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694439131/hng/Poster_m5jf1w.png`}
                      alt={`img`}
                    />
                  </Box>
                  <Box flex={1}>
                    <Image
                      h={`100%`}
                      src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1693877378/productize/shot6_e49via.png`}
                      alt={`img`}
                    />
                  </Box>
                  <Box flex={1}>
                    <Image
                      h={`100%`}
                      objectFit={`cover`}
                      src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1693877339/productize/IMG_20200303_205731_lpjimj.jpg`}
                      alt={`img`}
                    />
                  </Box>
                  <Box w={`100%`} pos={`absolute`} bottom={0}>
                    <SharedButton
                      leftIcon={`uiw:menu`}
                      text={'The Best Movies and Shows in September'}
                      width={'100%'}
                      height={'42px'}
                      bgColor={'rgba(18, 18, 18, 0.50)'}
                      textColor={'white'}
                      borderRadius={'10px'}
                      fontSize={{ base: `sm` }}
                    />
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default DashboardLayout;
