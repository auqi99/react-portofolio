// src/Projects.tsx
import React from "react";
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Projects: React.FC = () => (
  <Box id="projects" p={8} textAlign="center">
    <Text fontSize="2xl" mb={4}>
      Projects
    </Text>
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="https://via.placeholder.com/300" alt="Project 1" />
        <Box p={6}>
          <Text fontSize="xl" fontWeight="bold">
            Project 1
          </Text>
        </Box>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="https://via.placeholder.com/300" alt="Project 2" />
        <Box p={6}>
          <Text fontSize="xl" fontWeight="bold">
            Project 2
          </Text>
        </Box>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="https://via.placeholder.com/300" alt="Project 3" />
        <Box p={6}>
          <Text fontSize="xl" fontWeight="bold">
            Project 3
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Projects;
