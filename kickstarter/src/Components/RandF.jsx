import { Divider, Image, VStack } from "@chakra-ui/react";
import React from "react";

function RandF() {
  return (
    <>
      <VStack w="50%" align="left">
        <h3>FEATURED PROJECT</h3>
        <Divider
          orientation="horizontal"
          colorScheme="blue"
          variant="solid"
          size="xl"
        />
        <Image src="https://ksr-ugc.imgix.net/assets/038/078/695/0d9c9d3b603061b00096224de7c3b6ba_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1658857376&auto=format&frame=1&q=92&s=b35713459e82150e6becac84c1fe9bf5"></Image>
        <h1>The jfa Human Rights journal: Issue #2</h1>
        <h2>
          An online and print publication amplifying under-platformed human
          rights stories
        </h2>
        <p>By the jfa Human Rights journal</p>
      </VStack>
    </>
  );
}

export default RandF;
