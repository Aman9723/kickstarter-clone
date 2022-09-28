import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Flex
        gap={30}
        justify="flex-start"
        borderBottom="2px solid lightgray"
        py="20"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box _hover={{ textDecoration: "underline" }}>Arts</Box>
        <Box _hover={{ textDecoration: "underline" }}>
          Comics & Illustration
        </Box>
        <Box _hover={{ textDecoration: "underline" }}>Design & Tech</Box>
        <Box _hover={{ textDecoration: "underline" }}>Film</Box>
        <Box _hover={{ textDecoration: "underline" }}>Food & Craft</Box>
        <Box _hover={{ textDecoration: "underline" }}>Games</Box>
        <Box _hover={{ textDecoration: "underline" }}>Music</Box>
        <Box _hover={{ textDecoration: "underline" }}>Publishing</Box>
      </Flex>
      <Flex gap={20} justify="space-evenly" mt={40}>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontWeight: "bold",
            }}
          >
            ABOUT
          </li>
          <br />
          <li>About us</li>
          <li>Our charter</li>
          <li>Stats</li>
          <li>Press</li>
          <li>Jobs</li>
        </ul>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontWeight: "bold",
            }}
          >
            SUPPORT
          </li>
          <br />
          <li>Help Center</li>
          <li>Our Rules</li>
          <li>Creator Resources</li>
          <li>Forward Funds</li>
          <li>Brand assets</li>
        </ul>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontWeight: "bold",
            }}
          >
            MORE FROM KICKSTARTER
          </li>
          <br />
          <li>Newsletters</li>
          <li>Kickstarter Magazine</li>
          <li>The Creative Independent</li>
          <li>The Kickstarter Blog</li>
          <li>Mobile apps</li>
          <li>Research</li>
        </ul>
      </Flex>
      
    </>
  );
}

export default Footer;
