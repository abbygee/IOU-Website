import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react'

const Debt = (props) => {
    let price = 10.00
    let title = props.title

    return(
        <Box 
        borderRadius="0px 0px 10px 10px"
        color="white"
        h="fit-content"
        bg="rgba(255, 255, 255, 0.1)" 
        mb="7%"
        >
            
            <Flex align='center' direction="column" justify="space-between">

                <Box w='100%' bg="#CA41D6">
                    <Text fontSize='lg' align="center">{title}</Text>
                </Box>

                <Box mt='5%' mb='5%'>   
                    <Text fontSize='3xl'>${price}</Text>
                </Box>
                
            </Flex>  
        
        </Box>        
    );
}

export default Debt;