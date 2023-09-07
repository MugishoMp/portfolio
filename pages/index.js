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
import { BioSection, BioYear } from '../components/bio';
import TerminalPrompt from '../components/terminalPrompt';
// indexjs, the first page, homepage, basically the page that the path '/'
// points to

function Page() {
  return (
    <Container>
      <Box
        mt={6}
        mb={6}
      >
        <Section delay={0.3}>
          <TerminalPrompt />
        </Section>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Section delay={0.6}>
            <Heading as="h2" variant="page-title">
              Mugisho Mpozi
            </Heading>
            <p> Student (Developer \ Audiophile \ Bike-Head) </p>
          </Section>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Section delay={0.6}>
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
          </Section>
        </Box>
      </Box>

      <Box mt={6}>
        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Occupation
          </Heading>
          <Paragraph>
            Hello there! I&apos;m Mugisho. A CS student at Leiden University
            living in The Hague, The Netherlands, with a passion for technology
            and creativity. I like to create a small tools when if I feel like I am
            missing some functinoality like this
            {' '}
            <Link
              as={NextLink}
              href="/works/obsidianmd"
            >
              plugin
            </Link>
            {' '}
            that I made for the note taking app Obsidian.
          </Paragraph>
        </Section>
      </Box>

      <Box mt={10}>
        <Section delay={1.2} mt={4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Bukavu, Democratic Republic of the Congo.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Worked as a food courier at Foodora, Vince Delivery, and Uber Eats.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at Weconnect, adding and debugging small features and working
            on graphical user experience of their plaform.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Expected graduation year.
          </BioSection>
        </Section>
      </Box>
      <Box mt={10}>
        <Section delay={1.5} mt={4}>
          <Heading as="h3" variant="section-title">
            🎮
          </Heading>
          <Paragraph>
            When I&apos;m not coding, you can find me online playing Counter
            Strike 🔫, listening to music 🎵 or bouldering 🧗‍♂️ at the local gym.
          </Paragraph>
        </Section>
      </Box>
    </Container>
  );
}

export default Page;
