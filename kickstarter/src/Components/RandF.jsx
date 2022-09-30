import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import RecCard from "./RecCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const pageReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

let data = [
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/703/540/f504008a58a49ac0e4acbe555ff99e1e_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1664170992&auto=format&frame=1&q=92&s=eadda36a3c451425c504035ff0a49721",
    title: "SuperBase V: First Plug-and-Play Home...",
    funded: "11,392% funded",
    author: "By Zendure",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/574/931/7db574cb066835762f670ffa86735467_original.png?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663072830&auto=format&frame=1&q=92&s=5dbb7458f6ca9f1358d4add92d202d75",
    title: "Stormlight Premium Miniatures",
    funded: "5,162% funded",
    author: "By Brotherwise Games",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/649/191/9e5d744ad3be37bc87e5985d7d394bbd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663690413&auto=format&frame=1&q=92&s=8c364efacf340ab7b828195f38111dd9",
    title: "Dark Tomb",
    funded: "545% funded",
    author: "By Kozz",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/703/540/f504008a58a49ac0e4acbe555ff99e1e_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1664170992&auto=format&frame=1&q=92&s=eadda36a3c451425c504035ff0a49721",
    title: "SuperBase V: First Plug-and-Play Home...",
    funded: "11,392% funded",
    author: "By Zendure",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/574/931/7db574cb066835762f670ffa86735467_original.png?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663072830&auto=format&frame=1&q=92&s=5dbb7458f6ca9f1358d4add92d202d75",
    title: "Stormlight Premium Miniatures",
    funded: "5,162% funded",
    author: "By Brotherwise Games",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/649/191/9e5d744ad3be37bc87e5985d7d394bbd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663690413&auto=format&frame=1&q=92&s=8c364efacf340ab7b828195f38111dd9",
    title: "Dark Tomb",
    funded: "545% funded",
    author: "By Kozz",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/703/540/f504008a58a49ac0e4acbe555ff99e1e_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1664170992&auto=format&frame=1&q=92&s=eadda36a3c451425c504035ff0a49721",
    title: "SuperBase V: First Plug-and-Play Home...",
    funded: "11,392% funded",
    author: "By Zendure",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/574/931/7db574cb066835762f670ffa86735467_original.png?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663072830&auto=format&frame=1&q=92&s=5dbb7458f6ca9f1358d4add92d202d75",
    title: "Stormlight Premium Miniatures",
    funded: "5,162% funded",
    author: "By Brotherwise Games",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/649/191/9e5d744ad3be37bc87e5985d7d394bbd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1663690413&auto=format&frame=1&q=92&s=8c364efacf340ab7b828195f38111dd9",
    title: "Dark Tomb",
    funded: "545% funded",
    author: "By Kozz",
  },
];

function RandF() {
  const [page, setPage] = React.useReducer(pageReducer, 1);
  let end = page * 3 - 1;
  let start = end - 2;

  return (
    <>
      <HStack px="10" gap="10">
        <VStack w="50%" align="left" gap="2">
          <h3 style={{ fontSize: "13px", color: "gray", fontWeight: "700" }}>
            FEATURED PROJECT
          </h3>
          <Image src="https://ksr-ugc.imgix.net/assets/038/078/695/0d9c9d3b603061b00096224de7c3b6ba_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1658857376&auto=format&frame=1&q=92&s=b35713459e82150e6becac84c1fe9bf5"></Image>
          <h1 style={{ fontSize: "24px" }}>
            The jfa Human Rights journal: Issue #2
          </h1>
          <h2 style={{ fontSize: "18px" }}>
            An online and print publication amplifying under-platformed human
            rights stories
          </h2>
          <p style={{ fontSize: "12px", color: "gray" }}>
            By the jfa Human Rights journal
          </p>
        </VStack>
        <VStack h="container.sm">
          <Divider orientation="vertical" borderWidth=".5px" bg="gray" />
        </VStack>
        <Stack gap="3" direction="column">
          <h3 style={{ fontSize: "13px", color: "gray", fontWeight: "700" }}>
            RECOMMENDED FOR YOU
          </h3>
          <VStack gap="1" align="left">
            {data.map((item, i) => {
              if (i >= start && i <= end) {
                return (
                  <>
                    <RecCard data={item} />
                    <Divider />
                  </>
                );
              }
            })}
            <br />
            <Flex w="100%" justify="flex-end" align="center" gap={4}>
              <Button
                bg="transparent"
                color="darkblue"
                disabled={page === 1}
                onClick={() => setPage({ type: "dec" })}
              >
                <FiChevronLeft></FiChevronLeft>
              </Button>
              {[1, 2, 3].map((n) => (
                <Text
                  bg="transparent"
                  color="darkblue"
                  textDecoration={page === n ? "underline" : "none"}
                >
                  {n}
                </Text>
              ))}
              <Button
                bg="transparent"
                color="darkblue"
                disabled={page === 3}
                onClick={() => setPage({ type: "inc" })}
              >
                <FiChevronRight></FiChevronRight>
              </Button>
            </Flex>
          </VStack>
        </Stack>
      </HStack>
      <br />
    </>
  );
}

export default RandF;
