import { React, useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";

import { Flex, Box, Text, Image } from '@chakra-ui/react'
import master from '../images/mastercard.png'; // using images with import

const Debt = () => {
    const [cost, setCost] = useState(0.00)

    async function getTotal() {
		const req = await fetch('http://localhost:4000/dashboard/spent', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setCost(data.total)
		} else {
			alert(data.message)
		}
	}

    useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = decodeToken(token)
			if (!user) {
				localStorage.removeItem('token')
			} else {
				getTotal()
			}
		}
	})

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