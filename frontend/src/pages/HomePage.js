import React from 'react';
import { Flex, Box, Button, Heading, Link } from '@chakra-ui/react'
import money from '../images/money.png'; // using images with import
import NavBar from "../components/Header.js" //responsive version


const HomePage = () => {
    return(
        <Box h="100%" m="0">
          <NavBar />
          <Box  
          background="linear-gradient(135deg, #D86FCC 0%, #01055B 100%)"
          borderRadius={["45px 45px 150px 45px", "45px 45px 200px 45px", "45px 45px 200px 45px", "45px 45px 300px 45px"]}
          color="white"
          display='flex'
          m='auto'
          mt={["5%","5%","5%","2%"]}
          mb={["5%","5%","5%","2%"]}
          w="95%"
          h={["40vh","40vh","50vh","60vh"]}
          p={["30px","30px","50px","70px"]}
          justifyContent="space-between"
          >
            <Flex direction='column' align="flex-start" justify="center" w={["100%","100%","60%","60%"]}>
              <Heading as='h1' size='xl' mb="15px">
                  Track your payments, balances, and dues between groups
              </Heading>
              <Link href="/dashboard">
                <Button mt="15px" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }}>Get Started</Button> 
              </Link>
            </Flex>

            <Box bgImage={money} bgPosition="center" w={["0%","0%","40%","70%"]} bgRepeat="no-repeat"/>
          
          </Box>

          {/* Bottom Menu */}
          <Box
            bg="#2B3699"
            w="100%"
            h="100%"
            color="white"
            align="center"
            position="fixed"
            // mt={["5%","2%","2%","2%"]}
          >
            TODO: position fixed to fill rest of viewport
          </Box>
        </Box>
        
    );
} 


export default HomePage;