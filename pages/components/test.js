import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import styles from "styles/work.module.css"
export default function App() {
    return (
        <Container className={styles.set}>
            <Row gap={1}>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                1 of 2
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                2 of 2
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Spacer y={1} />
            <Row gap={1}>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                1 of 3
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                2 of 3
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                3 of 3
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}