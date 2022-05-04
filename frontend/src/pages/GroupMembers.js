import { React } from 'react';
import NavBar from "../components/NavBar" 
import DebtCard from "../components/DebtCard" 
import CreditCard from "../components/CreditCard" 
import Add from '../components/AddMember';
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

import { AiOutlineHome } from 'react-icons/ai'


// import axios from 'axios'
// const url = "http://localhost:3030/user/signup/" 

function GroupMembers() {
    const dash = {
        owed: "Amount They Owe You",
        owe: "Amount You Owe Them"
    }

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
                            <Text fontSize='6xl'>Group Members</Text>
                            
                            <Flex align="center" gap='5px'>
                                <Add title='a member'/>
                                <Spacer />
                                <Select
                                w="fit-content"
                                bg='rgba(31, 33, 74, 1)'
                                color='white'
                                placeholder='Select a Member'
                                borderColor='#CA41D6'
                                >
                                    <option value='1'>Abby</option>
                                    <option value='2'>Yoonji</option>
                                </Select>
                            </Flex>
                        </Flex>
                        
                        <TableContainer overflowY="auto" maxHeight="424px" borderRadius="10px" mt="3%" background="rgba(255, 255, 255, 0.1)">
                            <Table variant='unstyled' size="lg">
                                <Thead position="sticky" top={0} color="white" bg="#CA41D6">
                                    <Tr >
                                        <Th>Items Added</Th>
                                        <Th>Member Name</Th>
                                        <Th isNumeric>Amount You Owe</Th>
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
                                        <Td>Abby</Td>
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
                            <Link href="/dashboard">
                                <Button mb="7%" bg='#CA41D6' _hover={{ bg: '#e261ed' }}>
                                    <Text mr='8px' fontSize='2xl'>Dashboard</Text>
                                    <Icon w={6} h={6} as={AiOutlineHome} />
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

export default GroupMembers;