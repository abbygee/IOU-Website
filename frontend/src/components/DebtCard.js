import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react'

const Debt = (props) => {
    let price = props.amt
    let title = props.title

    return(
        <Box 
        borderRadius="0px 0px 10px 10px"
        color="white"
        h="fit-content"
        bg="rgba(255, 255, 255, 0.1)" 
        // zw='auto'
        {...props}
        >
            
            <Flex align='center' direction="column" justify="space-between">

                <Box w='100%' bg="#CA41D6" pl='1%' pr='1%' minWidth='max-content'>
                    <Text fontSize='lg' align="center">{title}</Text>
                </Box>

                <Box pt={["5%","5%","3%","5%"]} pb={["5%","5%","3%","5%"]}>   
                    <Text fontSize='3xl'>${price}</Text>
                </Box>
                
            </Flex>  
        
        </Box>        
    );
}

export default Debt;