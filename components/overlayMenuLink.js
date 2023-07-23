import { useState } from 'react';
import { Link, useColorModeValue, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import fontConfig from '../config/fontConfig';
import { keyframes } from '@emotion/react';

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const MenuLink = ({ href, children }) => {
  const linkColor = useColorModeValue('whiteAlpha.600', 'whiteAlpha.900');
  const hoverColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.600');

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      as={NextLink}
      href={href}
      fontSize={fontConfig.sizes['3xl']}
      fontFamily={fontConfig.fontFamily}
      color={isHovered ? hoverColor : linkColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        textDecoration: 'none',
      }}
    >
      {isHovered && (
        <Box
          as="span"
          animation={`${blinkAnimation} 1.2s infinite`}
        >
          {'>'}
        </Box>
      )}
      {children}
    </Link>
  );
};

export default MenuLink;
