import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import master from '../images/mastercard.png'; // using images with import

function Debt() {
    let cost = 100.00;

    return(
        <Flex 
        bg="linear-gradient(177.23deg, #F32CC7 -13.49%, #3A49F9 109.75%)"
        borderRadius='30px'
        color="white"
        w="100%"
        h='210px'
        direction="row"
        justify="space-between"
        p="7%"
        mb="7%"
        >
            {/* Left Column */}
            <Box w='fit-content'>
                <Flex h="100%" direction="column" justify="space-between">
                    {/* Top */}
                    <Box>
                        <Text fontSize='md' color="rgba(255, 255, 255, 0.5)">Total Monthly Expenditures</Text>
                        <Text fontSize='4xl'>${cost}</Text>
                    </Box>

                    {/* Bottom */}
                    <Box>
                        <Text fontSize='md'>5282 3456 7890 1289</Text>
                    </Box>
                </Flex>
                
            </Box>

            {/* Right Column */}
            <Box w='fit-content'>
                <Flex h="100%" direction="column" justify="space-between">
                    <Image h="45px" src={master}></Image>
                    <Text align="right" fontSize='md'>09/25</Text>
                </Flex>
            </Box>
            
        </Flex>        
    );
}

export default Debt;