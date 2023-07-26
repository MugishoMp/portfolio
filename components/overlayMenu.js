import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import OverlayMenuLink from './overlayMenuLink';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

function OverlayMenu({ isOpen, onClose }) {
  // is open is either true or false
  // on close is a function that toggles the value of is open
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setShowMenu(isOpen);
    }
  }, [isOpen]);

  const handleCloseMenu = () => {
    onClose();
    // Add a delay before setting setShowMenu to false
    setTimeout(() => {
      setShowMenu(false);
    }, 200); // Adjust the delay value as needed
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.9)"
      display={showMenu ? 'flex' : 'none'}
      alignItems="center"
      justifyContent="center"
      zIndex={999}
      // Use the custom function to handle closing after fade-out animation
      onClick={handleCloseMenu}
      pointerEvents={showMenu ? 'auto' : 'none'}
      css={{
        animation: isOpen
          ? `${fadeInAnimation} 0.2s`
          : `${fadeOutAnimation} 0.3s`,
      }}
    >
      <Flex p={4} flexDirection="column" textAlign="center">
        <OverlayMenuLink href="/"> Home </OverlayMenuLink>
        <OverlayMenuLink href="/works"> Works </OverlayMenuLink>
        <OverlayMenuLink href="/repo"> Repo </OverlayMenuLink>
      </Flex>
    </Box>
  );
}

export default OverlayMenu;
