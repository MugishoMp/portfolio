import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Text,
  Link,
  LinkBox,
  LinkOverlay,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';

export function GridItem({
  children,
  href,
  title,
  thumbnail,
}) {
  return (
    <Box
      w="100%"
      align="center"
    >
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>
          {children}
        </Text>
      </LinkBox>
    </Box>
  );
}

export function WorkGridItem({
  children,
  id,
  title,
  thumbnail,
}) {
  return (
    <Box
      w="100%"
      align="center"
    >
      <Link
        as={NextLink}
        href={`/works/${id}`}
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        _hover={{ textDecoration: 'none', color: 'orange.400' }}
      >
        <Box
          as="article"
          cursor="pointer"
          transition="transform 0.3s ease, color 0.3s ease"
          _hover={{
            transform: 'scale(1.02)',
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <Heading>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </Heading>
          <Text fontSize={14}>
            {children}
          </Text>
        </Box>
      </Link>
    </Box>
  );
}

export function GridItemStyle() {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  );
}
