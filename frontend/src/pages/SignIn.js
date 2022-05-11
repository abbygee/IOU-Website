import { React, useState } from 'react';

import {
    Box, Flex, Spacer,
    FormControl, FormLabel, FormErrorMessage,
    Input,
    Button, Link,
    Heading, Text,
    InputLeftElement, InputGroup,
  } from '@chakra-ui/react'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'

import NavBar from "../components/Header.js" //responsive version

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const isPassError = password === ''
    const isUsernameError = username === ''

    async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
            // TODO: Difference betweeen this and history with useNavigation?
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
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
                    mr={["0%","5%","30%","30%"]}
                    ml={["0%","5%","30%","30%"]}
                    mt="5%"
                    gap="10px"
                >
                    <Heading color="white" size='4xl'>Sign In</Heading>
                    <Spacer />
                    <Text w="50%" color="white" textAlign="center" fontSize='xl'>Sign in and start managing your group expenditures!</Text>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Box w="50%">
                    <form onSubmit={loginUser}>
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
                                console.log("hey")
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
                                console.log("heii")
                            ) : (
                                <FormErrorMessage color="#e261ed">A password is required.</FormErrorMessage>
                            )}
                        </FormControl>
                
                        <Button color="white" type="submit" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }} width="full" mt={4}>
                            LOGIN
                        </Button>

                    </form>
                    </Box>
                    <Spacer />
                    <Spacer />
                    <Heading w="50%" color="white" textAlign="center" size='sm'>
                        Don't have an account yet?
                    </Heading>
                    
                    <Link href="/register">
                        <Button color="white" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }}>
                                SIGN UP
                        </Button>
                    </Link> 
                </Flex>
            </Box>
        </>
    );
}

export default Login;