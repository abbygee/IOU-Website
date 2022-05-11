import { React, useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom'

import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerContent, DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack,
    Box,
    FormLabel,
    InputGroup, InputLeftAddon,
    Checkbox, CheckboxGroup, 
  } from '@chakra-ui/react'

const AddItem = (props) => {
    const history = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [group, setGroup] = useState([])
    async function populateMembers() {
      const req = await fetch('http://localhost:4000/dashboard/group', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
  
      const data = await req.json()
  
      if (data.status === 'ok') {
        setGroup(data.group)
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
        } else {
          populateMembers()
        }
      }
    })

    const label = props.title

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)
    const [peoples, setPeoples] = useState(group) // peoples is who to charge for this specific item

    const handleItemName = (e) => setName(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    
    //TODO: does this need to be async?
    async function handlePeoples(e) {
      const isChecked = e.target.checked
      const newUser =  e.target.value // a username btw
      let updated = peoples

      if (isChecked) {
        if (!updated.includes(newUser)) {
          updated.push(newUser)
          setPeoples(updated)
        }
      } else {
        // TODO: should check that peoples can't be empty
        if (updated.includes(newUser)) {
          const index = updated.indexOf(newUser);
          if (index > -1) {
            updated.splice(index, 1);
          }
          setPeoples(updated)
        }
      }
      console.log(peoples)
    }
    
    async function addItem(e) {
      e.preventDefault()
  
      const req = await fetch('http://localhost:4000/dashboard/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          name: name,
          price: price,
          peoples: peoples,
        }),
      })
  
      const data = await req.json()
      if (data.status === 'ok') {
        // console.log(data.id)
        setName('')
        setPrice(0.00)
        setPeoples([])
        console.log("succesfully added item!")
        onClose()
      } else {
        history('/login')
        // alert(data.error)
      }
    }

    // TODO: Somehow get display name from group instead of just storing username? (create a group model?) or an API call get?
    const listGroup = group.map(g => 
      <Checkbox key={g} onChange={handlePeoples} value={g}>{g}</Checkbox>
    )
  
    return (
      <>
        <Button bg='#CA41D6' _hover={{ bg: '#e261ed' }} onClick={onOpen}>
          Add {label}
        </Button>
       
        <Drawer 
        variant='alwaysOpen'
        isOpen={isOpen}
        onClose={onClose}
        size='md'
        >
			    <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>Add your new purchase</DrawerHeader>
                    
                <DrawerBody>
                  <Stack spacing='24px'>
                    <Box>
                        <FormLabel htmlFor='itemName'>Title of Item</FormLabel>
                        <Input
                            id='itemName'
                            placeholder='Please enter a title for the item'
                            value={name}
                            onChange={handleItemName}
                        />
                    </Box>
                      
                    <Box>
                        <FormLabel htmlFor='price'>Price of Item</FormLabel>
                        <InputGroup>
                          <InputLeftAddon>$</InputLeftAddon>
                          <Input
                              id='price'
                              placeholder='Please enter price'
                              type='number'
                              value={price}
                              onChange={handlePrice}
                          />
                        </InputGroup>
                    </Box>

                    <Box>
                      <FormLabel htmlFor='split'>Who do you want to split the price with?</FormLabel>
                      <CheckboxGroup iconColor='#CA41D6'>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                          {listGroup}
                        </Stack>
                      </CheckboxGroup>
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button 
                    bg='#CA41D6' 
                    _hover={{ bg: '#e261ed' }}
                    type='submit'
                    color='white'
                    onClick={addItem}
                    >
                      Submit
                    </Button>
                </DrawerFooter>
			      </DrawerContent>
		      </Drawer>
      </>
    )
  }

export default AddItem;