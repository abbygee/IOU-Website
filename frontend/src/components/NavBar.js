import React from 'react';
import { Box, Image, Button, Heading, Spacer, ButtonGroup, Link, Stack } from '@chakra-ui/react'
import logo from '../images/receipt.png'; // using images with import


function NavBar() {
    return (
      <Stack
        w='100%'
        pt='1%'
        pb='1%'
        pr='5%'
        pl='5%'
        align='center'
        direction='row'
      >
          <Link href="/">
            <Box as='button' display="flex" alignItems="center">
              <Image width="80px" height="80px" src={logo} alt="test"/>
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
          
      </Stack>
    );
  }
  
export default NavBar;