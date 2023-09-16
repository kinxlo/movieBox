import {
  OrderedList,
  ListItem,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.scss';
import { links } from './links';
import { Icon } from '@iconify/react';

type SubLink = {
  id: number;
  name: string;
  path: string;
};

type LinkProp = {
  id: number;
  name: string;
  path: string;
  img: string;
  type: string;
  subLinks?: SubLink[];
};

// type DropdownLinkProps = {
//   link: LinkProp;
// };

// const DropdownLink = ({ link }: DropdownLinkProps) => {
//   const navLinks = link.subLinks?.map((l) => {
//     return (
//       <NavLink to={l.path} key={l.id}>
//         <MenuItem justifyContent={`start`} fontSize={`sm`} fontWeight={500}>
//           {l.name}
//         </MenuItem>
//       </NavLink>
//     );
//   });

//   return (
//     <Menu>
//       <MenuButton
//         _hover={{ color: `red.100`, bg: `transparent` }} //change the hover color to that of the theme...DONT FORGET!!!
//         color={{ base: `black`, xl: `white` }}
//         fontWeight={`thin`}
//         bg={`transparent`}
//         as={Button}
//         rightIcon={<Icon icon={`mdi:chevron-down`} />}
//       >
//         <Text fontSize={`16px`}>{link.name}</Text>
//       </MenuButton>
//       <MenuList color={`black`}>{navLinks}</MenuList>
//     </Menu>
//   );
// };

type NavbarProps = {
  isMobile: boolean;
};

const Links = ({ isMobile }: NavbarProps) => {
  const navLinks = links.map((link) => {
    return (
      <NavLink
        key={link.id}
        to={link.path}
        style={{ borderRight: `3px solid transparent` }}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <Flex
          py={5}
          w={`186px`}
          fontSize={`20px`}
          color={`#666`}
          gap={5}
          alignItems={`center`}
        >
          <Image src={link.img} alt={`img`} />
          <ListItem>{link.name}</ListItem>
        </Flex>
      </NavLink>
    );
  });
  return (
    <OrderedList
      width={`100%`}
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `black` : `white`}
      // alignItems={{ xl: `center` }}
      justifyContent={`flex-start`}
      m={`auto`}
      // gap={{ base: 10, xl: 10 }}
    >
      {navLinks}
    </OrderedList>
  );
};

export default Links;
