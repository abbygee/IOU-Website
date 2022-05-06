import { React, useState } from 'react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton,
    Portal,
    Button,
    Box,
    Input,
  } from '@chakra-ui/react'


const AddMember = (props) => {
    const toAdd = props.title
    const [username, setUsername] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)

    async function addMember(event) {
        event.preventDefault()
    
        const req = await fetch('http://localhost:4000/dashboard/add-member', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
          },
          body: JSON.stringify({
            username: username
          }),
        })
    
        const data = await req.json()
        if (data.status === 'ok') {
          //TODO: Check if this works lol
          alert("succesfully added member!")
        } else {
          alert(data.error)
        }
      }
  
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
                            <Input
                            id='newMember'
                            placeholder='Please enter their username'
                            size='lg'
                            value={username}
                            onChange={handleUsername}
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
                        onClick={addMember}
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