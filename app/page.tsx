"use client"
import styles from "../componetns/index.module.css";
import { Container,Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <div className={styles.container}>
        <Text fontSize='6xl'>Muranaka <br/>Hiroyoshi</Text>
        <a>About</a>

        <a>Works</a>

        <a>Contact</a>
      </div>
    </Container>
      
    
  )
}
