import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition',
});

function Section({ children, delay = 0 }) {
  return (
    <StyledDiv
      initial={{
        y: 10,
        opacity: 0,
        transition: { delay, duration: 0.8 },
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.8 },
      }}
    >
      {children}
    </StyledDiv>
  );
}

export default Section;
