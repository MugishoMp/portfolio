import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const NightModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode='wait' initial={false}>
    <Box
      as={motion.div}
      style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      exit={{ y: 20, opacity: 0}}
      transition={{ delay: 0.0 }}
      height="100%"
      css={{
        aspectRatio: '1/1', // Set the aspect ratio to 1:1 (square)
      }}
    >
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        borderRadius={0}
        width="100%" // Set width to 100% (of parent's height)
        height="100%" // Set height to 100% (of parent's height)
      ></IconButton>
    </Box>
    </AnimatePresence>
  );
};

export default NightModeButton;
