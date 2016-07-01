// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  me: require("../assets/pp.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  stopSign: require("../assets/stop-sign.jpg"),
  philosophers: require("../assets/philosophers.png")
};

preloader(images);

const theme = createTheme({
  primary: "#008232"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["zoom", "slide"]} transitionDuration={250}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Entendiendo JavaScript
            </Heading>
            <Heading size={1} fit caps>
              Asincronía
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">Con ejemplos prácticos</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Make an afro Joke. Mention you studied in ITESA. Make a point on the fact that you don't come from a high-class/intellectual background. You're some weird guy. ">
            <Image src={images.me.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Francis Brito
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="white">
                  <S type="strikethrough">Lead de desarrollo Back-end</S> Bombero en <Link href="https://www.instacarro.com/sobrenos.html">InstaCarro.com</Link>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">Aficionado del desarrollo de software</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">Disfruta de escribir JavaScript</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">Será bailarín algún día</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} textColor="white" bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading textColor="white" caps size={2}>Agenda</Heading>
            <List>
              <ListItem>
                ¿Qué quiere decir "asincrono"?
              </ListItem>
              <ListItem>
                ¿Por qué es relevante?
              </ListItem>
              <ListItem>
                ¿Cómo JavaScript lo hace?
              </ListItem>
              <ListItem>
                ¿Como puedo hacer uso de esto?
              </ListItem>
              <ListItem>
              Herramientas utiles
              </ListItem>
              <ListItem>
              Anti-patrones
              </ListItem>
              <ListItem>
              Ejemplos del mundo real
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} notes="Mention concurrency">
            <Heading size={2} caps fit textColor="white">¿Qué quiere decir "asincrono"?</Heading>
          </Slide>
          <Slide bgColor="black">
            <BlockQuote>
              <Quote textColor="white" style={ {fontWeight: "300"} }>
          Asynchrony refers to the <S type="bold">occurrence of events independently of the main program flow</S> and ways to deal with such events.
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} notes="Browsers. UX. Talk about blocking. Why block is a bad thing. How does block impacts performance.">
            <Heading size={2} caps fit textColor="white">¿Por qué es relevante?</Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.stopSign.replace("/", "")} bgDarken={0.65}>
            <Heading size={3} fit italic textColor="white">Blocking</Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.philosophers.replace("/", "")} bgDarken={0.65} notes="Multiple tasks making progress at the same time">
            <Heading size={3} fit italic textColor="white">Concurrency</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps fit textColor="white" notes="Event-Loop model. Asynchronous APIs.">¿Cómo JavaScript lo hace?</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps fit textColor="white">¿Cómo puedo hacer uso de esto?</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">Callbacks</Heading>
          </Slide>
          <Slide bgColor="black">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide bgColor="#2d2d2d">
            <CodePane lang="js" source={require("raw!../assets/scripts/callbacks.example")}/>
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane lang="js" source={require("raw!../assets/scripts/callback-drawbacks.example")} />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">Promises</Heading>
          </Slide>
          <Slide bgColor="black">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">Streams</Heading>
          </Slide>
          <Slide bgColor="black" notes="An array laid out in time">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">Web Workers</Heading>
          </Slide>
          <Slide bgColor="black" notes="Mechanism to spawn threads on the web">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">ES2015: Generators</Heading>
          </Slide>
          <Slide bgColor="black">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide bgColor="white">
            <Text fit>Desventajas</Text>
            <List>
              <ListItem>Toma algo de tiempo entenderlos</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} fit textColor="white">ESNEXT (Stage 3): `async` functions</Heading>
          </Slide>
          <Slide bgColor="black">
            <Text textColor="white" fit>Definición</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps fit textColor="white">Herramientas utiles</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps fit textColor="white">Anti-patrones</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps fit textColor="white">Ejemplos del mundo real</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
