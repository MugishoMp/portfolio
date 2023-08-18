import {
  Heading,
  Text,
  Container,
  Divider,
} from '@chakra-ui/react';

function NotFound() {
  return (
    <Container>
      <Heading as="h1" mt={16}>Not Found</Heading>
      <Text>The page you were looking for was not found.</Text>
      <Divider my={6} />
      <img src="https://media.giphy.com/media/jbEz9aLxvu3Wv98BIi/giphy.gif" alt="Page not found!" />
    </Container>
  );
}

export default NotFound;
