import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

function NightModeButton() {
  const { toggleColorMode } = useColorMode();
  const purpleHSL = '270, 100%, 50%';
  const orangeHSL = '30, 100%, 50%';

  return (
    // Making sure the button is square and the overflow is hidden
    <Box
      height="100%"
      css={{
        aspectRatio: '1/1', // Set the aspect ratio to 1:1 (square)
      }}
      overflow="hidden" // Hide the content that goes beyond the parent's borders
    >
      <AnimatePresence mode="wait" initial={false}>
        {/* Changing background color */}
        <Box
          // useColorModeValue('purple', 'orange')
          as={motion.div}
          key={useColorModeValue('light', 'dark')}
          style={{ display: 'inline-block' }}
          initial={{
            backgroundColor: [
              useColorModeValue(`hsl(${orangeHSL})`, `hsl(${purpleHSL})`),
            ],
          }}
          animate={{
            backgroundColor: [
              useColorModeValue(`hsl(${orangeHSL})`, `hsl(${purpleHSL})`),
              useColorModeValue(`hsl(${purpleHSL})`, `hsl(${orangeHSL})`),
            ],
            transition: { duration: 1 },
          }}
          exit={{
            backgroundColor: [
              useColorModeValue(`hsl(${purpleHSL})`, `hsl(${orangeHSL})`),
            ],
          }}
          height="100%"
          width="100%"
        >
          {/* Hover color */}
          <Box
            as={motion.div}
            height="100%"
            width="100%"
            _hover={{
              bgColor: useColorModeValue(
                'rgba(0, 0, 0, 0.1)',
                'rgba(255, 255, 255, 0.1)',
              ),
            }} // To overwrite the hover default hover color
          >
            {/* The part that moves */}
            <Box
              as={motion.div}
              style={{ display: 'inline-block' }}
              key={useColorModeValue('light', 'dark')}
              initial={{
                y: '-100%',
                opacity: 0,
                transition: { delay: 0, duration: 0.9 },
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0, duration: 0.9 },
              }}
              exit={{
                y: '100%',
                opacity: 0,
                transition: { delay: 0, duration: 0.9 },
              }}
              height="100%"
              width="100%"
            >
              {/* // the icon part itself */}
              <IconButton
                aria-label="Toggle theme"
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
                borderRadius={0}
                width="100%" // Set width to 100% (of parent's height)
                height="100%" // Set height to 100% (of parent's height)
                bg="transparent" // Set the background color to transparent
                color={useColorModeValue('whiteAlpha.900', 'gray.800')}
                _hover={{ bgColor: 'rgba(255, 255, 255, 0)' }} // To overwrite the hover default hover color
              />
            </Box>
          </Box>
        </Box>
      </AnimatePresence>
    </Box>
  );
}

export default NightModeButton;
