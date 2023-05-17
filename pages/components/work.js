import {Text, Card, Container, Row, Col, Spacer, Link, Grid, Button,Image} from "@nextui-org/react";
import styles from "styles/work.module.css"

export default function main() {
    return (
        <div>
            <Spacer y={4}/>
            <Text h2 className={styles.title}>Works</Text>
            <Spacer y={4}/>
            <Grid.Container gap={1} justify="center">
                <Grid xs={3.5}>
                    <Card css={{ mw: "330px" }}>
                        <Card.Header>
                            <Text b>PAMS</Text>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Body css={{ py: "$10" }}>
                            <Image src='/img.png'></Image>
                        </Card.Body>
                        <Card.Divider />
                        <Card.Footer>
                            <Row justify="flex-end">
                                <Button size="sm">詳細を見る</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid xs={3.5}>
                    <Card css={{ mw: "330px" }}>
                        <Card.Header>
                            <Text b>PAMS</Text>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Body css={{ py: "$10" }}>
                            <Image src='/img.png'></Image>
                        </Card.Body>
                        <Card.Divider />
                        <Card.Footer>
                            <Row justify="flex-end">
                                <Button size="sm">詳細を見る</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid >
                    <Card css={{ mw: "330px" }}>
                        <Card.Header>
                            <Text b>PAMS</Text>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Body css={{ py: "$10" }}>
                            <Image src='/img.png'></Image>
                        </Card.Body>
                        <Card.Divider />
                        <Card.Footer>
                            <Row justify="flex-end">
                                <Button size="sm">詳細を見る</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

            </Grid.Container>
            <Spacer y={3}/>
        </div>
    );
}