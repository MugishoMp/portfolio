import {
  Container,
  Heading,
  SimpleGrid,
  _Divider,
  Text,
} from '@chakra-ui/react';
import Section from '../components/section';
import {
  WorkGridItem,

} from '../components/grid-item';

function Works() {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Text>
            Tempporary
          </Text>
          <WorkGridItem />
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Works;
