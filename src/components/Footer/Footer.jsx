import React from "react";
import { Text, Image, Container } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container
      css={{ width: "fit-content" }}>
      <Text 
        h6
        color="#01b4e4"
        css={{
          textAlign: "center",
          margin: "5px",
        }}>
        Trabajo final - Programa Codo a Codo 2023 ©  
      </Text>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text
          h6
          color="#01b4e4"
          css={{
          textAlign: "center",
          margin: "5px",
          }}
        >
        This product uses the TMDB API but is not endorsed or certified by
        </Text>  
        <Image
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="The Movie DB Logo"
          autoResize={true}
          width={100}
        />
      </div>
    </Container>
  )
}

export default Footer;