import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar: React.FC = () => (
  <Box bg="#333" p={4}>
    <Flex as="nav" justifyContent="center">
      <Link href="#about" color="white" mx={2}>
        About
      </Link>
      <Link href="#projects" color="white" mx={2}>
        Projects
      </Link>
      <Link href="#skills" color="white" mx={2}>
        Skills
      </Link>
      <Link href="#contact" color="white" mx={2}>
        Contact
      </Link>
    </Flex>
  </Box>
);

export default Navbar;
