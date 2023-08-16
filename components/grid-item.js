import Image from 'next/image';
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
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
      <LinkBox as="article" cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Heading>
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
        </Heading>
        <Text fontSize={14}>
          {children}
        </Text>
      </LinkBox>
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
