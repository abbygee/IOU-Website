import { React, useState, useEffect } from 'react';

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
    const { isOpen, onOpen, onClose } = useDisclosure()

    const label = props.title
    const group = props.group

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)
    const [peoples, setPeoples] = useState([]) // peoples is who to charge for this specific item

    useEffect(() => {
      setPeoples(props.group);
    },[props.group]);

    function editPeoples (isChecked, newUser) {
      // const isChecked = 
      // const newUser =  // a username btw
      let updated = peoples

      if (isChecked) {
        if (!updated.includes(newUser)) {
          updated.push(newUser)
          return updated
        }
      } else {
        if (updated.includes(newUser)) {
          const index = updated.indexOf(newUser);
          if (index > -1) {
            updated.splice(index, 1);
          }
          return updated
        }
      }
    }

    const handleItemName = (e) => setName(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    const handlePeoples = (e) => {
      const test = editPeoples(e.target.checked, e.target.value)
      setPeoples(test)
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
        setName('')
        setPrice(0.00)
        setPeoples(group)
        console.log("succesfully added item!")
        onClose()
      } else {
        alert(data.error)
      }
    }

    // TODO: Somehow get display name from group instead of just storing username? (create a group model?) or an API call get?
    const listGroup = group.map(g => 
      <Checkbox onChange={handlePeoples} value={g}>{g}</Checkbox>
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
                      <CheckboxGroup iconColor='#CA41D6' defaultValue={group}>
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