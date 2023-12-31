import {
  Container,
  Heading,
  SimpleGrid,
  _Divider,
} from '@chakra-ui/react';
import Section from '../../components/section';
import {
  WorkGridItem,
} from '../../components/grid-item';
import thumbObsidian from '../../public/images/works/obsidian-plugin-repo.png';
import thumbGrass from '../../public/images/works/grass1.png';

function Works() {
  return (
    <Container>
      <Heading as="h2" mb={4} mt={6}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="obsidianmd" title="Obsidian Plugin" thumbnail={thumbObsidian}>
            A plugin for Obsidian.
          </WorkGridItem>
          <WorkGridItem id="grass" title="Grass simulation" thumbnail={thumbGrass}>
            Simulation of BOTW style grass.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Works;
