import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import fontConfig from '../config/fontConfig'; // Import the fontConfig

const LogoBox = styled.span`
    font-weight:bold;
    font-size: 18x;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: scale(1.1);
    }
`;

function Logo() {
  const mugishoLegoIcon = '/images/logo/mugisho_lego_star_wars_icon_small.png';

  return (
    <Link href="/">
      <LogoBox>
        <Image
          src={mugishoLegoIcon}
          width={30}
          height={30}
          alt="logo"
        />
        <Text
          color={useColorModeValue(
            'gray.800',
            'whiteAlpha.900',
          )}
          fontFamily={fontConfig.fontFamily}
          fontWeight="bold"
          ml={3}
        >
          Mugisho Mpozi
        </Text>
      </LogoBox>
    </Link>
  );
}

export default Logo;
