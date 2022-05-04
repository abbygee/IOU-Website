import { React } from 'react';
import NavBar from "../components/Header.js" //responsive version
import DebtCard from "../components/DebtCard" 
import CreditCard from "../components/CreditCard" 
import Add from '../components/AddItem';

import {
    Box,
    Select,
    Text,
    Icon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Button,
    Link,
    Spacer
  } from '@chakra-ui/react'

import { BsPeople } from 'react-icons/bs'


// import axios from 'axios'
// const url = "http://localhost:3030/user/signup/" 

function Dashboard() {
    const dash = {
        owed: "Amount Owed to You",
        owe: "Amount You Owe Others"
    }

    // Dummy data
    // const user1 = {
    //     username: "abbygeed",
    //     name: "abby"
    // }
    // const user2 = {
    //     username: "seronton",
    //     name: "yoonji"
    // }
    // const user3 = {
    //     username: "pbate",
    //     name: "patrick"
    // }

    // const group = {
    //     members: [user1, user2]
    // }

    // const item1 = {
    //     name: "Oreos",
    //     price: 3.00,
    //     peoples: [user2, user3],
    // }

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
                                    <Tr>
                                        <Td>Oreos</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>5.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Grapes</Td>
                                        <Td>Yoonji</Td>
                                        <Td isNumeric>10.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Insurance</Td>
                                        <Td>Abby</Td>
                                        <Td isNumeric>26.00</Td>
                                    </Tr>
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

                        {/* Credit Card */}
                        <CreditCard />

                        <DebtCard title={dash.owed}/>
                        <DebtCard title={dash.owe}/>
                    </Box>
                </Flex>
                
            </Box>
        </Box>
    );
}

export default Dashboard;