import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function PageHeading() {
  return (
    <Flex direction="column" gap={4} px="10" my="10">
      <Heading fontWeight='light'>Arts</Heading>
      <Text fontWeight='light'>
        Discover the artists and organizations using Kickstarter to realize
        ambitious projects in visual art and performance.
      </Text>
      <Flex gap={3} color="#4C6CF8">
        <Text>Explore Art</Text>
        <Text>Explore Dance</Text>
        <Text>Explore Photography</Text>
        <Text>Explore Theatre</Text>
      </Flex>
    </Flex>
  );
}

export default PageHeading;
