import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

// logo
import Logo from './logo';

// for night mode
import NightModeButton from './night-mode-button';

import CustomMenuButton from './menu-button';
import fontConfig from '../config/fontConfig';

function LinkItem({ href, path, children }) {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      fontFamily={fontConfig.fontFamily}
    >
      {children}
    </Link>
  );
}

function Navbar(props) {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      // not entirely sure what removing this exactly does so for now im just
      // going to comment this out
      // {...props}
    >
      <Container
        maxW="container.md"
        align="center"
        justify="space-between"
        display="flex"
        p={0}
      >
        <Box
          p={2}
          display="flex"
          wrap="wrap"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing="tighter">
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'colum', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, nmd: 0 }}
          >
            {/* children are any elements that reside within this item */}
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
          </Stack>
        </Box>

        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <NightModeButton />
          <CustomMenuButton />
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
