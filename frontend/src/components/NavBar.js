import React from 'react';
import { Box, Flex, Image, Button, Heading, Spacer, ButtonGroup, Link } from '@chakra-ui/react'
import logo from '../images/receipt.png'; // using images with import

function NavBar() {
    return (
      <Flex
        w='100%'
        pt='25px'
        pb='25px'
        pr='105px'
        pl='105px'
        align='center'
      >
          <Link href="/">
            <Box as='button' display="flex" alignItems="center">
              <Image width="100px" height="100px" src={logo} alt="test"/>
              <Heading as='h1' size='2xl' ml="25px"> IOU </Heading>
            </Box>
          </Link>
          
          <Spacer />
          <ButtonGroup spacing='10'>
            <Button colorScheme='black' variant='link'>Overview</Button>
            <Button colorScheme='black' variant='link'>Features</Button>
            <Button colorScheme='black' variant='link'>About</Button>
            <Button colorScheme='black' variant='link'>Contact Us</Button>
          </ButtonGroup>
          <Spacer />

         
            <ButtonGroup spacing='10'>
              <Link href="/register">
                <Button colorScheme='black' variant='outline'>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button colorScheme='black' variant='outline'>Log in</Button>
              </Link>
                
            </ButtonGroup>
        
          
      </Flex>
    );
  }
  
export default NavBar;