import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Hide,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function TopNavbar() {
  return (
    <>
      <Flex h="20" justify="center" p="6">
        <Image src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&s=0cce952d7b55823ff451a58887a0c578" />
      </Flex>
      <Flex px="10" border="1px solid lightgray">
        <ButtonGroup>
          <Button
            bg="transparent"
            border="transparent"
            _hover={{ color: "green" }}
          >
            Discover
          </Button>
          <Button
            bg="transparent"
            border="transparent"
            _hover={{ color: "green" }}
          >
            Start a Project
          </Button>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup>
          <Button
            bg="transparent"
            border="transparent"
            _hover={{ color: "green" }}
            gap="8"
          >
            <Text>Search</Text>
            <SearchIcon />
          </Button>
          <Button
            bg="transparent"
            border="transparent"
            _hover={{ color: "green" }}
          >
            Log in
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex
        gap={30}
        justify="center"
        borderBottom="1px solid lightgray"
        py="20"
        align="center"
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
    </>
  );
}

export default TopNavbar;
