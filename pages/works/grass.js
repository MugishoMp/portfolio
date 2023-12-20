import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import {
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import {
  Title,
  WorkImage,
  Meta,
} from '../../components/work';
import P from '../../components/paragraph';

function Work() {
  return (
    <Container>
      <Title>
        Grass simulation
        &nbsp;
        <Badge>
          2023
        </Badge>
      </Title>
      <P>
        A visually immersive grass simulation project that replicates dynamic
        grass fields using advanced Worley noise and shader techniques. This
        project demonstrates expertise in graphics programming, creating realistic,
        interactive grassy landscapes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plugin</Meta>
          <Link href="https://github.com/MugishoMp/Computer_Graphics">
            Grass simulation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, Opengl, GLM, SDL2</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/grass2.png" alt="grass" />
    </Container>
  );
}

export default Work;
// export { getServerSideProps } from '../../components/chakra'
