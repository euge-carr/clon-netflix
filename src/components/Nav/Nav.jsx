import { Navbar, Text } from "@nextui-org/react";
import React from "react";
import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";
import { links } from "../../core/routes/links.js";

const Nav = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          ClonNetflix
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        {links.map((link) => (
          <Navbar.Item key={link.name}>
            <Link to={link.path}>
              <Text>{link.name}</Text>
            </Link>
          </Navbar.Item>
        ))}
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
