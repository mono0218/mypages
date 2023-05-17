import {Navbar, Text, Button, Link} from "@nextui-org/react";

export default function navbar() {
    return (
        <Navbar>
            <Navbar.Brand>
                <a href={"/"}>
                    <Text h3>Muranaka Hiroyoshi</Text>
                </a>
            </Navbar.Brand>
            <Navbar.Content className={"navbar"} hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="#">Profile</Navbar.Link>
                <Navbar.Link href="#">Project</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">SNS</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    );
}

