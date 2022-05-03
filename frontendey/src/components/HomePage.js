import React from 'react';
import { Flex, Box, Button, Heading } from '@chakra-ui/react'
import money from '../images/money.png'; // using images with import
import NavBar from './NavBar';


function HomePage() {
    return(
        <Box h="100%" m="0">
          <NavBar />
          <Box  
          background="linear-gradient(135deg, #D86FCC 0%, #01055B 100%)"
          borderRadius="45px 45px 300px 45px"
          color="white"
          display='flex'
          m="auto"
          w="95%"
          h="60vh"
          p="70px"
          justifyContent="space-between"
          >
            <Flex direction='column' align="flex-start" justify="center" w="60%">
              <Heading as='h1' size='xl' mb="15px">
                  Track your payments, balances, and dues between groups
              </Heading>
              <Button mt="15px" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }}>Get Started</Button> 
            </Flex>

            <Box bgImage={money} bgPosition="center" w="70%" bgRepeat="no-repeat"/>
          
          </Box>

          {/* Bottom Menu */}
          <Box
            bg="#2B3699"
            w="100%"
            mt='25px'
            // h="134px"
            h="100%"
            color="white"
            align="center"
            position="fixed"
          >
            position fixed to fill rest of viewport
          </Box>
        </Box>
        
    );
} 


export default HomePage;