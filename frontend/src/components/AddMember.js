import React from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    Button,
    Box,
    Input,
  } from '@chakra-ui/react'


const AddMember = (props) => {
    const toAdd = props.title
  
    return (
        <Popover>
            <PopoverTrigger>
            <Button bg='#CA41D6' _hover={{ bg: '#e261ed' }}>
                Add {toAdd}
            </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader size='lg'>New Member's Username</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Box>
                        {/* <FormLabel htmlFor='username'>Your Username</FormLabel> */}
                        <Input
                        id='newMember'
                        placeholder='Please enter their username'
                        size='lg'
                        />
                    </Box>
                </PopoverBody>
                <PopoverFooter>
                    <Button 
                    bg='#CA41D6' 
                    _hover={{ bg: '#e261ed' }}
                    type='submit'
                    color='white'
                    size='md'
                    >
                      Submit
                    </Button>
                </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
  }

export default AddMember;