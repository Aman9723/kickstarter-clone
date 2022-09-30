import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function Creator() {
  return (
    <>
      <h3
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: "gray",
          paddingLeft: "3rem",
          paddingTop: "3rem",
        }}
      >
        CREATOR'S CORNER
      </h3>
      <Grid
        gridTemplateColumns="repeat(2,1fr)"
        rowGap={14}
        columnGap={10}
        px="10"
        py="16"
      >
        <GridItem gap={3} display="flex" border="1px solid lightgray" p="3">
          <Image
            src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
            w="40%"
            h="200"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              Kickstarter Creator Resources
            </h3>
            <Text lineHeight={6} fontSize="15px">
              Our definitive roundup of everything from planning shipping to
              communicating with backers.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={3} display="flex" border="1px solid lightgray" p="3">
          <Image
            src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
            w="40%"
            h="200"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              Kickstarter Creator Resources
            </h3>
            <Text lineHeight={6} fontSize="15px">
              Our definitive roundup of everything from planning shipping to
              communicating with backers.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={3} display="flex" border="1px solid lightgray" p="3">
          <Image
            src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
            w="40%"
            h="200"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              Kickstarter Creator Resources
            </h3>
            <Text lineHeight={6} fontSize="15px">
              Our definitive roundup of everything from planning shipping to
              communicating with backers.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={3} display="flex" border="1px solid lightgray" p="3">
          <Image
            src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
            w="40%"
            h="200"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              Kickstarter Creator Resources
            </h3>
            <Text lineHeight={6} fontSize="15px">
              Our definitive roundup of everything from planning shipping to
              communicating with backers.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Creator;
