import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const NightModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      borderRadius={0}
    //   width="100%" // Set width to 100% (of parent's height)
      height="100%" // Set height to 100% (of parent's height)
      css={{
        aspectRatio: '1/1', // Set the aspect ratio to 1:1 (square)
      }}
    ></IconButton>
  );
};

export default NightModeButton;
