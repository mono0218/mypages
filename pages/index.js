import  Main from "./components/main"
import Works from "./components/work"
import {Container,Text} from "@nextui-org/react";
import styles from "styles/index.module.css"
export default function Home() {
  return (
      <div>
          <Container className={styles.main}>
              <Main/>
          </Container>
          <Text h2 className={styles.h1}> Please Scroll<br/>↓</Text>
          <Container className={styles.works}>
              <Works/>
          </Container>
      </div>
  );
}
