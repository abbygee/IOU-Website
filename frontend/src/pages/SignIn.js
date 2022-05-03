import { React, useState } from 'react';
import NavBar from "../components/NavBar.js" 
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Flex,
    Heading,
    InputLeftElement,
    InputGroup,
    Spacer
  } from '@chakra-ui/react'

import { AtSignIcon, LockIcon } from '@chakra-ui/icons'


// import axios from 'axios'
// const url = "http://localhost:3030/user/signup/" 

function Register() {
    const [nameInput, setNameInput] = useState('')
    const [passInput, setPassInput] = useState('')

    const handleNameInputChange = (e) => setNameInput(e.target.value)
    const handlePassInputChange = (e) => setPassInput(e.target.value)

    const isNameError = nameInput === ''
    const isPassError = passInput === ''

    return (
        <Box>
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
                mt="5%"
                gap="10px"
            >
                <Heading color="white" size='4xl'>Sign In</Heading>
                <Spacer />
                <Heading w="50%" color="white" textAlign="center" size='md'>Sign in and start managing your group expenditures!</Heading>
                <Spacer />
                <Spacer />
                <Spacer />
                <Box w="50%">
                    <FormControl isInvalid={isNameError}>
                        <FormLabel htmlFor='username'></FormLabel>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<AtSignIcon color='gray.300' />}
                            />
                            <Input
                                id='username'
                                type='username'
                                value={nameInput}
                                onChange={handleNameInputChange}
                                placeholder='Username'
                                variant='filled'
                                focusBorderColor='#e261ed'
                                errorBorderColor='#CA41D6'
                                _focus={{ bg: 'white' }}
                            />
                        </InputGroup>
            
                        {!isNameError ? (
                            // <FormHelperText color="white">
                            // Enter a unique username.
                            // </FormHelperText>
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
                                value={passInput}
                                onChange={handlePassInputChange}
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
                

                </Box>

                <Spacer />
                <Spacer />
                <Heading w="50%" color="white" textAlign="center" size='sm'>
                    Don't have an account yet?
                </Heading>

                <Button w="50%" color="white" type="submit" bg='#CA41D6' size='lg' _hover={{ bg: '#e261ed' }}>
                        SIGN UP
                </Button>   

            </Flex>
        </Box>
        </Box>
    );
}

export default Register;