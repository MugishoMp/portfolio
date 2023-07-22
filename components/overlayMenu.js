import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import OverlayMenuLink from './overlayMenuLink.js';

const OverlayMenu = ({ isOpen, onClose }) => {
  const [menuOpacity, setMenuOpacity] = useState(0);

  return (
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
      pointerEvents={isOpen ? 'auto' : 'none'} // Control pointer events based on isOpen
    >
      
      <Flex p={4} flexDirection="column" textAlign="center">
        <OverlayMenuLink href="/"> Home </OverlayMenuLink>
        <OverlayMenuLink href="/works"> Works </OverlayMenuLink>
        <OverlayMenuLink href="/repo"> Repo </OverlayMenuLink>
      </Flex>
    </Box>
  )
}

export default OverlayMenu
