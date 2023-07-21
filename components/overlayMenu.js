import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.6)"
      display={isOpen ? 'block' : 'none'}
      alignItems="center"
      justifyContent="center"
      zIndex={999}
      onClick={onClose}
    >
      <Box p={4} bg="white" borderRadius="md">
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/works">
          Works
        </Link>
        <Link as={NextLink} href="/posts">
          Posts
        </Link>
      </Box>
    </Box>
  )
}

export default OverlayMenu
