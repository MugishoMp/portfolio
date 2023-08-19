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
        Obsidian Plugin
        &nbsp;
        <Badge>
          2023
        </Badge>
      </Title>
      <P>
        An Obsidian plugin that lets you customize the width of the editor by
        means of a small slider. It has been installed by more than 500
        Obsidian users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plugin</Meta>
          <Link href="https://github.com/MugishoMp/obsidian-editor-width-slider">
            Editor Width Slider
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / macOS / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Chakra UI, Framer Motion, ThreeJS</span>
        </ListItem>
      </List>

      <WorkImage src="https://github.com/MugishoMp/obsidian-editor-width-slider/blob/master/images/demo-gif-full-size.gif?raw=true" alt="Inkdrop" />
    </Container>
  );
}

export default Work;
// export { getServerSideProps } from '../../components/chakra'
