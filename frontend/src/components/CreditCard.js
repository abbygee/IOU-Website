import { React } from 'react';
// import { decodeToken } from "react-jwt";

import { Flex, Box, Text, Image } from '@chakra-ui/react'
import master from '../images/mastercard.png'; // using images with import

const Debt = (props) => {
    return(
        <Flex 
        bg="linear-gradient(177.23deg, #F32CC7 -13.49%, #3A49F9 109.75%)"
        borderRadius='30px'
        color="white"
        w={["90%","90%","45%","100%"]}
        h='210px'
        direction="row"
        justify="space-between"
        p={["7%","3%","3%","7%"]}
        m={["auto","auto","0%","auto"]}
        mb={["7%","7%","3%","7%"]}
        mt={["0%","0%","3%","0%"]}
        >
            {/* Left Column */}
            <Box w='fit-content'>
                <Flex h="100%" direction="column" justify="space-between">
                    {/* Top */}
                    <Box>
                        <Text fontSize='md' color="rgba(255, 255, 255, 0.5)">Total Monthly Expenditures</Text>
                        <Text fontSize='4xl'>${props.cost}</Text>
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