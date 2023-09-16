import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Image,
  Link,
  Center,
  DrawerCloseButton,
  DrawerFooter,
  Stack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Links from './NavigationLinks';
import { Icon } from '@iconify/react';
import { SharedButton } from '../../components/shared-button/Button';

export const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center cursor={`pointer`} display={{ xl: `none` }}>
        <Icon
          fontSize={`1.5rem`}
          onClick={onOpen}
          color="white"
          icon={`ci:menu-duo-md`}
        />
      </Center>

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent px={10}>
          <DrawerCloseButton my={2} />
          <DrawerHeader py={5}>
            <Link as={RouterLink} to={`/`}>
              <Image
                alt="logo"
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694858265/Logo_1_naatxp.png`}
              />
            </Link>
          </DrawerHeader>
          <DrawerBody py={10}>
            <Links isMobile={true} />
          </DrawerBody>
          {/* <DrawerFooter>
            <Stack w={`100%`} gap={4}>
              <Link>
                <SharedButton
                  fontSize={{ base: `sm`, md: `md` }}
                  text={'Login'}
                  width={'100%'}
                  height={'48px'}
                  bgColor={'transparent'}
                  textColor={'grey'}
                  borderRadius={'4px'}
                />
              </Link>
              <Link>
                <SharedButton
                  fontSize={{ base: `sm`, md: `md` }}
                  text={'Get Started'}
                  width={'100%'}
                  height={'48px'}
                  bgColor={'yellow.200'}
                  textColor={'white'}
                  borderRadius={'4px'}
                />
              </Link>
            </Stack>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

// export default Sidenav;
