import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
// indexjs, the first page, homepage, basically the page that the path '/'
// points to

function Page() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I am a Computer Science Student based in The Netherlands!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mugisho Mpozi
          </Heading>
          <p> Student (Student \ In Shambles \ Lost) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={useColorModeValue(0, 1.5)}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile/Mugisho_1_Square_Zoomed.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello there! I&apos;m Mugisho, A CS student at Leiden University
          living in The Hague, The Netherlands, with a passion for technology
          and creativity. Often creating a small tool if i feel like I am
          missing some functinoality like this
          {' '}
          <Link
            as={NextLink}
            href="/works/slider"
          >
            Slider
          </Link>
          {' '}
          that i made for obsidian. When I&apos;m not coding, you can find me
          online playing Counter Strike, listening to music or bouldering at a
          local gym.
        </Paragraph>
      </Section>
    </Container>
  );
}

export default Page;
