import React from "react";
import { Box, Flex, Text, Button, Image, Heading, Link} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../images/receipt.png'; // using images with import

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const history = useNavigate()

  const signout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    history('/');
  }

  if (localStorage.getItem('token')) {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={6}
        bg={['red', "#2B3699", "#2B3699", "white"]}
        color={["white", "white", "white", "black"]}
        {...props}
      >
        <Flex align="center">
          <Link href="/" display="flex" alignItems="center">
              <Image width="80px" height="80px" src={logo} alt="test"/>
              <Heading as='h1' size='2xl' ml="25px"> IOU </Heading>
          </Link>
        </Flex>
  
        <Box as='button' display={{ base: "block", lg: "none" }} onClick={toggleMenu}>
          {show ? <CloseIcon boxSize='5'/> : <HamburgerIcon boxSize='8'/>}
        </Box>
  
        <Box
          display={{ base: show ? "block" : "none", lg: "block" }}
          flexBasis={{ base: "100%", lg: "auto" }}
        >
          <Flex
            align="center"
            justify={["center", "space-between", "space-between", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 4, 0]}
          >
            <MenuItem to="/dashboard">Overview </MenuItem>
            <MenuItem to="/dashboard">Features </MenuItem>
            <MenuItem to="/dashboard">About </MenuItem>
            <MenuItem to="/dashboard">Contact </MenuItem>
            <MenuItem to="/login">
              <Button
                colorScheme='black'
                variant='outline'
                onClick={signout}
              >
                Log Out
              </Button>
            </MenuItem>
            {/* <MenuItem to="/register" isLast>
              <Button
                colorScheme='black'
                variant='outline'
              >
                Register
              </Button>
            </MenuItem> */}
          </Flex>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
      //   mb={8}
        p={6}
        bg={['red', "#2B3699", "#2B3699", "white"]}
        color={["white", "white", "white", "black"]}
        {...props}
      >
        <Flex align="center">
          <Link href="/" display="flex" alignItems="center">
              <Image width="80px" height="80px" src={logo} alt="test"/>
              <Heading as='h1' size='2xl' ml="25px"> IOU </Heading>
          </Link>
        </Flex>
  
        <Box as='button' display={{ base: "block", lg: "none" }} onClick={toggleMenu}>
          {show ? <CloseIcon boxSize='5'/> : <HamburgerIcon boxSize='8'/>}
        </Box>
  
        <Box
          display={{ base: show ? "block" : "none", lg: "block" }}
          flexBasis={{ base: "100%", lg: "auto" }}
        >
          <Flex
            align="center"
            justify={["center", "space-between", "space-between", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 4, 0]}
          >
            <MenuItem to="/dashboard">Overview </MenuItem>
            <MenuItem to="/dashboard">Features </MenuItem>
            <MenuItem to="/dashboard">About </MenuItem>
            <MenuItem to="/dashboard">Contact </MenuItem>
            <MenuItem to="/login">
              <Button
                colorScheme='black'
                variant='outline'
              >
                Login
              </Button>
            </MenuItem>
            <MenuItem to="/register" isLast>
              <Button
                colorScheme='black'
                variant='outline'
              >
                Register
              </Button>
            </MenuItem>
          </Flex>
        </Box>
      </Flex>
    );
  }

  
};

export default Header;