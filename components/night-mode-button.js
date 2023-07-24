import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const NightModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      height="100%"
      css={{
        aspectRatio: '1/1', // Set the aspect ratio to 1:1 (square)
      }}
      overflow="hidden" // Hide the content that goes beyond the parent's borders
    >
      <AnimatePresence mode='wait' initial={false}>
        <Box
        // useColorModeValue('purple', 'orange')
          as={motion.div}
          key={useColorModeValue('light', 'dark')}
          style={{ display: 'inline-block' }}
          initial={{ backgroundColor: ['orange']}}
          animate={{ backgroundColor: ['purple', 'orange'], transition: { delay: 0, duration: 5 }}}
          exit={{ backgroundColor: ['purple']}}
          height="100%"
          width="100%"
        >
          <Box
            as={motion.div}
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: "-30%", opacity: 0, transition: { delay: 0, duration: 0.9 } }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0, duration: 0.9 } }}
            exit={{ y: "30%", opacity: 0, transition: { delay: 0, duration: 0.9 } }}
            height="100%"
            width="100%"
          >
            <IconButton
              aria-label="Toggle theme"
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}
              borderRadius={0}
              width="100%" // Set width to 100% (of parent's height)
              height="100%" // Set height to 100% (of parent's height)
              bg="transparent" // Set the background color to transparent
              _hover={{ bgColor: "rgba(255, 255, 255, 0)" }} // Transparent white hover color
            />
          </Box>

        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default NightModeButton;
