import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Jumbotron: React.FC = () => (
  <Box bg="white" color="#333" p={8} textAlign="center">
    <Text fontSize="4xl">Welcome</Text>
    <Text fontSize="xl">Here is my portofolio</Text>
  </Box>
);

export default Jumbotron;
