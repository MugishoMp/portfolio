import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

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
          <p> Student (Developer \ Hobbyist \ Audiophile) </p>
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
    </Container>
  );
}

export default Page;
