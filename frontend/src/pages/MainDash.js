import { React, useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom'

import {
    Box, Flex,
    Select,
    Text,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
  } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import NavBar from "../components/Header.js" //responsive version
import DebtCard from "../components/DebtCard" 
import CreditCard from "../components/CreditCard" 
import AddItem from '../components/AddItem';
import AddMember from '../components/AddMember';

const Dashboard = () => {
    const owedLabel = "Amount Owed to You"
    const oweLabel = "Amount You Owe Others"
    const history = useNavigate()
	
    const [items, setItems] = useState([])
	async function populateItems() {
		const req = await fetch('http://localhost:4000/group/items', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setItems(data.items)
		} else {
            history('/login')
			// alert(data.message)
		}
	}

    // const [me, setMe] = useState('')
    // async function whoAmI() {
	// 	const req = await fetch('http://localhost:4000/user/who-am-i', {
	// 		headers: {
	// 			'x-access-token': localStorage.getItem('token'),
	// 		},
	// 	})

	// 	const data = await req.json()

	// 	if (data.status === 'ok') {
	// 		setMe(data.user)
	// 	} else {
    //         history('/login')
	// 		// alert(data.message)
	// 	}
	// }

    const [group, setGroup] = useState([])
    // const [groupDisplays, setGroupDisplays] = useState([])
    async function populateMembers() {
		const req = await fetch('http://localhost:4000/dashboard/group', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setGroup(data.group)
            // setGroupDisplays(data.groupDisplays)
		} else {
            history('/login')
			// alert(data.message)
		}
	}

    async function deleteItem(e) {
        e.preventDefault()
        const itemID = e.currentTarget.id
    
        const req = await fetch('http://localhost:4000/dashboard/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
          },
          body: JSON.stringify({
            id: itemID,
          }),
        })
    
        const data = await req.json()
        if (data.status === 'ok') {
            setItems(data.items)
            // console.log(data.groupItems)
            console.log("succesfully deleted last item!")
        } else {
            // history('/login')
            alert(data.message)
        }
    }

    const [expenditures, setExpenditures] = useState(0.00)
    async function getTotal() {
		const req = await fetch('http://localhost:4000/dashboard/spent', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setExpenditures(data.total)
		} else {
            history('/login')
			// alert(data.message)
		}
	}

    const [owes, setOwes] = useState(0.00)
    async function getOwes() {
		const req = await fetch('http://localhost:4000/group/owe-to-all', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setOwes(data.debt)
		} else {
            history('/login')
			// alert(data.message)
		}
	}

    const [owed, setOwed] = useState(0.00)
    async function getOwed() {
		const req = await fetch('http://localhost:4000/group/owed-by-all', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()

		if (data.status === 'ok') {
			setOwed(data.debt)
		} else {
            history('/login')
			// alert(data.message)
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
				getTotal()
                getOwes()
                getOwed()
                populateItems()
                populateMembers()
                // whoAmI()
			}
		}
	})

    const listItems = items.map(item => 
        <Tr>
            <Td>
                <Flex align="baseline">
                    {item.name}
                    <Box as="button" id={item.id} onClick={deleteItem} ml={2} w='fit-content' h='fit-content'>
                        <CloseIcon boxSize={3} />
                    </Box>
                </Flex>
            </Td>
            <Td>{item.boughtByDisplay}</Td>
            <Td isNumeric>{item.price}</Td>
        </Tr>
    )

    const listGroup = group.map(g => 
        <option value='{g}'>{g}</option>
    )

    if (localStorage.getItem('token')) {
        return (
            <Box h={["100%","100%","fit-content","100vh"]} m="0" overflow={["none","none","none","hidden"]}> 
                <NavBar />
        
                <Box 
                h="100%"
                bg="linear-gradient(134.89deg, rgba(8, 7, 9) 0.46%, rgba(5, 6, 45) 44.5%, #01055B 100.26%)"
                color="#FFFCFC"
                p="3%"
                >
                    {/* Outer/Encompassing Container */}
                    <Flex
                    direction={["column","column","column","row"]}
                    w="100%"
                    justify="center"
                    >
                        {/* Main Left Container */}
                        <Box 
                        w={["100%","100%","100%","60%"]} 
                        mr={["0%","0%","0%","5%"]} 
                        display={['block', 'block', 'flex', 'flex']} 
                        flexDirection='column'
                        justifyContent= 'center'
                        >
                            {/* Inline please */}
                            <Flex align="center" justify="space-between" direction={["column","column","row","row"]}>
                                <Text fontSize={['5xl', '5xl', '6xl', '6xl']} mr='3px'>Dashboard</Text>
    
                                <Flex align="center" gap='8px'>
                                    <AddItem title='an item' group={group}/>
                                    <AddMember title='a member'/>
    
                                    <Select
                                        w="fit-content"
                                        bg='rgba(31, 33, 74, 1)'
                                        color='white'
                                        placeholder='Select a Member'
                                        borderColor='#CA41D6'
                                        >
                                            {listGroup}
                                    </Select>
                                </Flex>
                            </Flex>
                            
                            {/* TODO: fix maxHeight to be responsive to view height, borderRadius , */}
                            <TableContainer overflowY={["auto","auto","auto","auto"]} h={["350px","424px","424px","424px"]} borderRadius="10px" mt="3%" background="rgba(255, 255, 255, 0.1)">
                                <Table variant='unstyled' size='lg'>
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
                        <Box 
                        w={["100%","100%","100%","26%"]} 
                        // ml={["0%","0%","0%","5%"]} 
                        display={['block', 'block', 'flex', 'flex']} 
                        mt={["7%","7%","3%","0%"]}
                        flexDirection={['column', 'column', 'row', 'column']} 
                        justifyContent={['center', 'center', 'space-around', 'center']} 
                        alignContent='center'
                        >
    
                            {/* <Flex justify='center'>
                                <Link href="/group-members">
                                    <Button mb="7%" bg='#CA41D6' _hover={{ bg: '#e261ed' }}>
                                        <Text mr='8px' fontSize='2xl'>Group Members</Text>
                                        <Icon w={6} h={6} as={BsPeople} />
                                    </Button>    
                                </Link>
                            </Flex> */}
                            {/* <Text>{me} is logged in! :D</Text> */}
    
                            <CreditCard cost={expenditures}/>
                            
                            <Box 
                            display={['block', 'block', 'flex', 'block']} 
                            flexDirection='column' 
                            justifyContent='center' 
                            w={["100%","100%","40%","100%"]}
                            // mb={["7%","7%","3%","7%"]}
                            // m={["0%","0%","3%","0%"]}
                            >
                                <DebtCard title={owedLabel} amt={owed} mb={["7%","7%","3%","7%"]}/>
                                <DebtCard title={oweLabel} amt={owes} mt={["0%","0%","3%","0%"]}/>
                            </Box>

                            {/* <DebtCard title={owedLabel} amt={owed}/>
                            <DebtCard title={oweLabel} amt={owes}/> */}
                        </Box>
                    </Flex>
                    
                </Box>
            </Box>
        );
    } else {
        window.location.href = '/login'
    }
}

export default Dashboard;