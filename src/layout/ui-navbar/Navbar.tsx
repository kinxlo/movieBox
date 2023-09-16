import {
  Flex,
  Image,
  Center,
  Link,
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import Links from './NavigationLinks';
import { Sidenav } from './SideNavigationbar';
import { Icon } from '@iconify/react';
import { SharedButton } from '../../components/shared-button/Button';

export const Navbar = () => {
  return (
    <Flex
      className="cc-container"
      justifyContent={`space-between`}
      alignItems={`center`}
      height={`5rem`}
      paddingInline={{ base: 4, xl: 0 }}
    >
      <Center>
        <Link as={RouterLink} to={`/`}>
          <Image
            alt="logo"
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694438853/hng/Logo_dwxste.png`}
          />
        </Link>
      </Center>
      <Box display={{ base: `none`, lg: `initial` }}>
        <FormControl w={`525px`}>
          <InputGroup color={`white`} w={`100%`}>
            <Input
              _placeholder={{ color: `white` }}
              placeholder="What do you want to watch?"
            />
            <InputRightElement color={`white`}>
              <Icon icon={`iconamoon:search-bold`} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
      <Flex color={`white`} gap={5} alignItems={`center`}>
        <Text>Sign in</Text>
        <Center
          display={{ base: `block`, md: `none` }}
          bgColor={`red`}
          borderRadius={`100%`}
          p={2}
        >
          <Sidenav />
        </Center>
      </Flex>
    </Flex>
  );
};
