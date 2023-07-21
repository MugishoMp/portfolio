import { Box, Link, Flex, Fade } from '@chakra-ui/react'
import NextLink from 'next/link'
import fontConfig from '../config/fontConfig'

const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <Fade in={isOpen}>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        bg="rgba(0, 0, 0, 0.9)"
        display={isOpen ? 'flex' : 'none'}
        alignItems="center"
        justifyContent="center"
        zIndex={999}
        onClick={onClose}
      >
        
        <Flex p={4} flexDirection="column" textAlign="center">
          <Link as={NextLink} href="/" fontSize={fontConfig.sizes['3xl']}>
            Home
          </Link>
          <Link as={NextLink} href="/works" fontSize={fontConfig.sizes['3xl']}>
            Works
          </Link>
          <Link as={NextLink} href="/posts" fontSize={fontConfig.sizes['3xl']}>
            Posts
          </Link>
        </Flex>
      </Box>
    </Fade>
    
  )
}

export default OverlayMenu
