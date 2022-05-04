import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack,
    Box,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    Checkbox,
    CheckboxGroup,
  } from '@chakra-ui/react'


function AddItem(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toAdd = props.title
  
    return (
      <>
        <Button ref={btnRef} bg='#CA41D6' _hover={{ bg: '#e261ed' }} onClick={onOpen}>
        Add {toAdd}
        </Button>
       
        <Drawer 
        variant='alwaysOpen'
        isOpen={isOpen}
        onClose={onClose}
        size='md'
        >
			<DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>Add your purchase</DrawerHeader>
                    
                <DrawerBody>
                    <Stack spacing='24px'>
                      {/* Should take your username anyways */}
                        {/* <Box>
                            <FormLabel htmlFor='username'>Your Username</FormLabel>
                            <Input
                            id='username'
                            placeholder='Please enter your username'
                            />
                        </Box> */}

                        <Box>
                            <FormLabel htmlFor='price'>Price of Item</FormLabel>
                            <InputGroup>
                            <InputLeftAddon>$</InputLeftAddon>
                            <Input
                                id='price'
                                placeholder='Please enter price'
                                type='number'
                            />
                            </InputGroup>
                        </Box>

                        <Box>
                            <FormLabel htmlFor='itemName'>Title of Item</FormLabel>
                            <Input
                                id='itemName'
                                placeholder='Please enter a title for the item'
                            />
                        </Box>

                        <Box>
                          <FormLabel htmlFor='split'>Who do you want to split the price with?</FormLabel>
                          <CheckboxGroup iconColor='#CA41D6' defaultValue={['abby', 'yoonji']}>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                              <Checkbox value='abby'>Abby</Checkbox>
                              <Checkbox value='yoonji'>Yoonji</Checkbox>
                              {/* <Checkbox value='kakashi'>kakashi</Checkbox> */}
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