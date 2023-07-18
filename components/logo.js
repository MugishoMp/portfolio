import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

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
`

const Logo = () => {
    const mugishoLegoIcon = `/images/logo/logo_200.png`

    return (
        <Link href="/">
                <LogoBox> 
                    <Image 
                        src={mugishoLegoIcon} 
                        width={20} 
                        height={20} 
                        alt="logo" 
                    />
                    <Text
                        color={useColorModeValue(
                                'gray.800', 
                                'whiteAlpha.900'
                               )}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        Mugisho Mpozi
                    </Text>
                </LogoBox> 
        </Link>
    )
}

export default Logo
