import { Box, Button, Input, VStack } from "@chakra-ui/react";
import React from "react";

function Newsletter() {
  return (
    <>
      <VStack py="10" gap="3" border="1px solid lightgray">
        <h3 style={{ fontSize: "24px" }}>See the future in your inbox.</h3>
        <p style={{ fontSize: "16px" }}>
          Sign up to receive Invent, Kickstarter’s Design and Tech newsletter.
        </p>
        <Box display="flex" justify="center" gap="5">
          <Input placeholder="Enter email address" w={500} type="email"></Input>
          <Button bg="gray" color="white" _hover={{ bg: "black" }}>
            Subscribe
          </Button>
        </Box>
      </VStack>
    </>
  );
}

export default Newsletter;
