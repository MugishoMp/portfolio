import React, { useContext } from 'react';
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,  
} from '@chakra-ui/react'
import { 
    HamburgerIcon,
} from '@chakra-ui/icons'

//logo
import Logo from './logo'

// for night mode
import NightModeButton from './night-mode-button.js'

// for the menu overlay
import { MenuContext } from '../contexts/menuContext.js'; // Update the path

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
    return (
        <Link 
            as={NextLink}
            href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props 
    const { toggleMenu } = useContext(MenuContext);

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '20202380')}
            style={{backdropFilter:'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            > 
                <Flex align="center" mr={5}>         
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'colum', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={ 1}
                    mt={{base: 4, nmd: 0}}
                >
                    {/*children are any elements that reside within this item */}
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <NightModeButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <IconButton
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                            onClick={toggleMenu}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
   )
}

export default Navbar
