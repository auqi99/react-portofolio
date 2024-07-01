// src/Skills.tsx
import React from 'react';
import { Box, List, ListItem, Icon, Text } from '@chakra-ui/react';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const Skills: React.FC = () => (
  <Box id="skills" p={8} textAlign="center">
    <Text fontSize="2xl" mb={4}>Skills</Text>
    <List display="flex" justifyContent="center" alignItems="center" listStyleType="none" p={0}>
      <ListItem display="flex" alignItems="center" mx={4}>
        <Icon as={FaJsSquare} w={6} h={6} mr={2} />
        JavaScript
      </ListItem>
      <ListItem display="flex" alignItems="center" mx={4}>
        <Icon as={FaReact} w={6} h={6} mr={2} />
        React
      </ListItem>
      <ListItem display="flex" alignItems="center" mx={4}>
        <Icon as={FaCss3Alt} w={6} h={6} mr={2} />
        CSS
      </ListItem>
      <ListItem display="flex" alignItems="center" mx={4}>
        <Icon as={FaHtml5} w={6} h={6} mr={2} />
        HTML
      </ListItem>
    </List>
  </Box>
);

export default Skills;
