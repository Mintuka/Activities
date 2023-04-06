import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

type Props = {};

const NavBar = (props: Props) => {
  return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo"/>
                    Activities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default NavBar;
