import { React, useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom'

import {
    Box, Flex, Spacer,
    Select,
    Text,
    Icon,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
    Button,
    Link,
  } from '@chakra-ui/react'
import { BsPeople } from 'react-icons/bs'

import NavBar from "../components/Header.js" //responsive version
import DebtCard from "../components/DebtCard" 
import CreditCard from "../components/CreditCard" 
import Add from '../components/AddItem';

const Dashboard = () => {
    const owedLabel = "Amount Owed to You"
    const oweLabel = "Amount You Owe Others"
    // const [totalSpent, setSpent] = useState(0)

    const history = useNavigate()
	
    const [items, setItems] = useState([])

	async function populateItems() {
		const req = await fetch('http://localhost:4000/dashboard/items', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setItems(data.items)
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
				history('/login')
			} else {
				populateItems()
			}
		}
	})

    const listItems = items.map(item => 
        <Tr>
            <Td>{item.name}</Td>
            <Td>{item.boughtByDisplay}</Td>
            <Td isNumeric>{item.price}</Td>
        </Tr>
    )

    return (
        <Box>
            <NavBar />
    
            <Box 
            position="fixed"
            h="100%"
            w="100%"
            bg="linear-gradient(134.89deg, rgba(8, 7, 9) 0.46%, rgba(5, 6, 45) 44.5%, #01055B 100.26%)"
            color="#FFFCFC"
            p="3%"
            >
                {/* Outer/Encompassing Container */}
                <Flex
                direction="row"
                w="100%"
                justify="center"
                >
                    {/* Main Left Container */}
                    <Box w="60%" mr="5%">
                        {/* Inline please */}
                        <Flex align="center" justify="space-between">
                            <Text fontSize={['xl', '5xl', '6xl', '6xl']}>Dashboard</Text>

                            <Flex align="center" gap='5px'>
                                <Add title='an item'/>

                                <Spacer />

                                {/* TODO at month filter/functionality */}
                                <Select
                                w="fit-content"
                                bg='rgba(31, 33, 74, 1)'
                                color='white'
                                placeholder='Select a Month'
                                borderColor='#CA41D6'
                                >
                                    <option value='1'>January</option>
                                    <option value='2'>February</option>
                                    <option value='3'>March</option>
                                    <option value='4'>April</option>
                                    <option value='5'>May</option>
                                    <option value='6'>June</option>
                                    <option value='7'>July</option>
                                    <option value='8'>August</option>
                                    <option value='9'>September</option>
                                    <option value='10'>October</option>
                                    <option value='11'>November</option>
                                    <option value='12'>December</option>
                                </Select>
                            </Flex>
                        </Flex>
                        
                        {/* TODO: fix maxHeight to be responsive to view height, borderRadius , */}
                        <TableContainer overflowY="auto" maxHeight="424px" borderRadius="10px" mt="3%" background="rgba(255, 255, 255, 0.1)">
                            <Table variant='unstyled' size="lg">
                                <Thead position="sticky" top={0} color="white" bg="#CA41D6">
                                    <Tr>
                                        <Th>Items Added</Th>
                                        <Th>Added By</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                
                                <Tbody>
                                    {listItems}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/* Right Column */}
                    <Box w="26%" ml="5%">

                        <Flex justify='center'>
                            <Link href="/group-members">
                                <Button mb="7%" bg='#CA41D6' _hover={{ bg: '#e261ed' }}>
                                    <Text mr='8px' fontSize='2xl'>Group Members</Text>
                                    <Icon w={6} h={6} as={BsPeople} />
                                </Button>    
                            </Link>
                        </Flex>

                        <CreditCard />

                        <DebtCard title={owedLabel} />
                        <DebtCard title={oweLabel} />
                    </Box>
                </Flex>
                
            </Box>
        </Box>
    );
}

export default Dashboard;