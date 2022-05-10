import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Box, Flex, Spacer,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
    Input,
    Button, 
    Heading, Text,
    InputLeftElement, InputGroup, 
  } from '@chakra-ui/react'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import { BsFillPersonFill } from 'react-icons/bs'

import NavBar from "../components/Header.js" //responsive version

const Register = () => {
    const history = useNavigate()

    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')


    const handleDisplayNameChange = (e) => setDisplayName(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleUsernameChange = (e) => setUsername(e.target.value)

    const isDisplayNameError = displayName === ''
    const isPassError = password === ''
    const isUsernameError = username === ''

    async function registerUser(event) {
        // TODO: What does this do lol
		event.preventDefault()

		const response = await fetch('http://localhost:4000/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                displayName,
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history('/login')
		} else {
            alert('Please choose another username.')
        }
	}

    return (
        <>
            <NavBar />
            <Box 
            h="100%"
            position="fixed"
            w="100%"
            background="linear-gradient(134.89deg, #D86FCC 0.46%, #01055B 100.26%)"
            >
                {/* <Header /> */}
                <Flex
                    align="center"
                    direction="column"
                    justify='space-evenly'
                    mr="30%"
                    ml="30%"
                    mt="4%"
                    gap="10px"
                >
                    <Heading color="white" size='4xl'>Sign Up</Heading>
                    <Spacer />
                    <Text w="50%" color="white" textAlign="center" fontSize='xl'>Sign up and start managing your group expenditures!</Text>
                    <Spacer />
                    <Box w="50%">
                        <form onSubmit={registerUser}>
                            <FormControl isInvalid={isDisplayNameError}>
                                <FormLabel htmlFor='displayname'></FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsFillPersonFill color='rgba(192, 203, 217)' />}
                                    />
                                    <Input
                                        id='displayname'
                                        type='displayname'
                                        value={displayName}
                                        onChange={handleDisplayNameChange}
                                        placeholder='Display Name'
                                        variant='filled'
                                        focusBorderColor='#e261ed'
                                        errorBorderColor='#CA41D6'
                                        _focus={{ bg: 'white' }}
                                    />
                                </InputGroup>
                    
                                {!isDisplayNameError ? (
                                    <FormHelperText color="white">
                                    How your name will appear to others!
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage color="#e261ed">A display name is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={isUsernameError}>
                                <FormLabel htmlFor='username'></FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<AtSignIcon color='gray.300' />}
                                    />
                                    <Input
                                        id='username'
                                        type='username'
                                        value={username}
                                        onChange={handleUsernameChange}
                                        placeholder='Username'
                                        variant='filled'
                                        focusBorderColor='#e261ed'
                                        errorBorderColor='#CA41D6'
                                        _focus={{ bg: 'white' }}
                                    />
                                </InputGroup>
                    
                                {!isUsernameError ? (
                                    console.log("Enter a unique username.")
                                ) : (
                                    <FormErrorMessage color="#e261ed">A username is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={isPassError}>
                                <FormLabel htmlFor='password'></FormLabel>
                                <InputGroup>
                                    <InputLeftElement 
                                    pointerEvents='none'
                                    children={<LockIcon color='gray.300' />}
                                    />
                                    <Input
                                        id='password'
                                        type='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder='Password'
                                        variant='filled'
                                        focusBorderColor='#e261ed'
                                        errorBorderColor='#CA41D6'
                                        _focus={{ bg: 'white' }}
                                    />
                                </InputGroup>
                                
                                {!isPassError ? (
                                    <FormHelperText color="white">
                                    Enter a password you won't forget!
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage color="#e261ed">A password is required.</FormErrorMessage>
                                )}
                            </FormControl>
                    
                            <Button 
                            color="white" 
                            type="submit"
                            bg='#CA41D6' 
                            size='lg' 
                            _hover={{ bg: '#e261ed' }} 
                            width="full" 
                            mt={4}
                            >
                                SIGN UP
                            </Button>
                        </form>
                    </Box>
                    <Spacer />
                    <Spacer />
                    <Heading w="50%" color="white" textAlign="center" size='sm'>
                        Already have an account?
                    </Heading>
                    <Button w="50%" color="white" type="submit" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }}>
                            LOGIN
                    </Button>   
                </Flex>
            </Box>
        </>
    );
}

export default Register;