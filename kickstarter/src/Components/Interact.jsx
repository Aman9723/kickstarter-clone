import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { Circle } from "@chakra-ui/react";

function Interact() {
  return (
    <>
      <Circle border="1px solid black" p="1">
        <BsBookmark></BsBookmark>
      </Circle>
      <Circle border="1px solid black" p="1">
        <BiLike></BiLike>
      </Circle>
      <Circle border="1px solid black" p="1">
        <BiDislike></BiDislike>
      </Circle>
    </>
  );
}

export default Interact;
