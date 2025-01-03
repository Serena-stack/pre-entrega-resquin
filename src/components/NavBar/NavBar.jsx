import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useGetAllProducts } from '../../hooks/useGetAllProducts'
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    
    const {items} = useGetAllProducts("categories");
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><Link to="/">Tienda</Link></Box>
                            <Menu>
                                <MenuButton as={Button} >
                                    Categorias
                                </MenuButton>
                                <MenuList height={'300px'} overflowY={'scroll'}>
                                    {
                                        items.map((catagory)=>{
                                            return(
                                                <MenuItem key={category.slug}>
                                                <link to = {'/category/${category.slug}' }>
                                                {category.name}
                                                </link>
                                                </MenuItem>
                                            );
                                        })
                                    }
                                </MenuList>
                            </Menu>
                    <Flex alignItems={'center'}>
                        <CartWidget />
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'../../../../usuario.png'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'../../../../usuario.png'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Serena Resquin</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
    }