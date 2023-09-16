import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';

const Footer = () => {
  return (
    <Stack gap={`36px`} alignItems={`center`}>
      <Flex gap={`48px`} fontSize={`24px`} color={`black`}>
        <Icon icon={`entypo-social:facebook`} />
        <Icon icon={`mdi:instagram`} />
        <Icon icon={`ri:twitter-fill`} />
        <Icon icon={`mdi:youtube`} />
      </Flex>
      <Flex
        textAlign={`center`}
        flexDir={{ base: `column`, lg: `row` }}
        gap={`48px`}
      >
        <Text as={`h6`}>Conditions of Use</Text>
        <Text as={`h6`}>Privacy & Policy</Text>
        <Text as={`h6`}>Press Room</Text>
      </Flex>
      <Text as={`h6`} color={`#6B7280`}>
        © 2021 MovieBox by Adriana Eka Prayudha{' '}
      </Text>
    </Stack>
  );
};

export default Footer;
