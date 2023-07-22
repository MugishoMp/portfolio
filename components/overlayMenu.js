import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import OverlayMenuLink from './overlayMenuLink.js';
import { keyframes, css } from '@emotion/react';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.9;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 0.9;
  }
  to {
    opacity: 0;
  }
`;

const OverlayMenu = ({ isOpen, onClose }) => {
  const [showMenu, setShowMenu] = useState(isOpen);

  useEffect(() => {
    setShowMenu(isOpen);
  }, [isOpen]);

  const handleCloseMenu = () => {
    // Start the fade-out animation
    setShowMenu(false);

    // Wait for the fade-out animation to complete before closing the menu
    setTimeout(() => {
      onClose();
    }, 300); // Adjust the timeout value to match the duration of the fade-out animation
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
      onClick={handleCloseMenu} // Use the custom function to handle closing after fade-out animation
      pointerEvents={showMenu ? 'auto' : 'none'}
      css={{
        animation: isOpen ? `${fadeInAnimation} 0.3s` : `${fadeOutAnimation} 0.3s`,
      }}
    >
      <Flex p={4} flexDirection="column" textAlign="center">
        <OverlayMenuLink href="/"> Home </OverlayMenuLink>
        <OverlayMenuLink href="/works"> Works </OverlayMenuLink>
        <OverlayMenuLink href="/repo"> Repo </OverlayMenuLink>
      </Flex>
    </Box>
  );
};

export default OverlayMenu;
