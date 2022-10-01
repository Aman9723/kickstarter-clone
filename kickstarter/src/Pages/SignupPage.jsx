import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineApple } from "react-icons/ai";

function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0px",
        background: "#f7f7f6",
      }}
    >
      <form
        style={{
          background: "white",
          width: "400px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Heading fontWeight="400" fontSize="30px">
          Sign up
        </Heading>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Checkbox>
          <Text fontSize="14px">
            Send me a weekly mix of handpicked projects, plus occasional
            Kickstarter news
          </Text>
        </Checkbox>
        <Checkbox>
          <Text fontSize="14px">
            Contact me about participating in Kickstarter research
          </Text>
        </Checkbox>
        <Button color={"white"} bg="#028858" w="full">
          Create account
        </Button>

        <p style={{ fontSize: "12px", color: "gray" }}>
          By signing up, you agree to our Privacy Policy, Cookie Policy and
          Terms of Use.
          <br />
          <span
            style={{
              color: "#39579A",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Read More
          </span>
        </p>
        <HStack>
          <Divider></Divider>
          <p>or</p>
          <Divider></Divider>
        </HStack>
        <Button color={"white"} bg="black" w="full">
          <AiOutlineApple />
          Sign in with Apple
        </Button>
      </form>
    </div>
  );
}

export default Signup;
