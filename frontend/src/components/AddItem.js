import { React, useState } from 'react';
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
    // const btnRef = React.useRef()
    const label = props.title

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)
    // const [peoples, setPeoples] = useState([])

    const testppls = ["abby" , "yoonji"]
    
    // const [newItem, setNewItem] = useState('')

    const handleItemName = (e) => setName(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    const handlePeoples = (e) => {
      console.log(e.target.value)
      // setPeoples(e.target.value)
    }
    
    async function addItem(event) {
      event.preventDefault()
  
      const req = await fetch('http://localhost:4000/dashboard/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          name: name,
          price: price,
          peoples: testppls,
        }),
      })
  
      const data = await req.json()
      if (data.status === 'ok') {
        alert("Successfully Added! Refresh? page to update table.")
      } else {
        alert(data.error)
      }
    }
  
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
                      <CheckboxGroup iconColor='#CA41D6' defaultValue={['abby', 'yoonji']} onChange={handlePeoples}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                          <Checkbox value='abby'>Abby</Checkbox>
                          <Checkbox value='yoonji'>Yoonji</Checkbox>
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