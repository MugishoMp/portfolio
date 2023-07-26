import React, { useContext } from 'react';
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
// for the menu overlay
import { MenuContext } from '../contexts/menuContext'; // Update the path

function CustomMenuButton() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <Box
      ml={0}
      display={{ base: 'inline-block', md: 'none' }}
      height="100%" // Set height to 100% (of parent's height)
      css={{
        aspectRatio: '1/1', // Set the aspect ratio to 1:1 (square)
      }}
      _hover={{
        bgColor: useColorModeValue(
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 255, 255, 0.1)',
        ),
      }}
    >
      <IconButton
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Options"
        onClick={toggleMenu}
        borderRadius={0}
        border="none" // Remove the border
        height="100%" // Set height to 100% (of parent's height)
        width="100%" // Set height to 100% (of parent's height)
        _hover={{ bgColor: 'rgba(255, 255, 255, 0)' }}
      />
    </Box>
  );
}

export default CustomMenuButton;
