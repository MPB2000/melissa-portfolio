"use client";

import { HStack, Button, Icon } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectFooterProps {
  liveUrl: string;
  githubUrl: string;
}

export const ProjectFooter = ({ liveUrl, githubUrl }: ProjectFooterProps) => {
  return (
    <HStack gap={3} pt={2} px={6} pb={6}>
      <Button
        onClick={() => window.open(liveUrl, "_blank")}
        size="sm"
        colorScheme="blue"
        variant="outline"
      >
        <Icon as={FiExternalLink} mr={2} />
        Live Demo
      </Button>
      <Button
        onClick={() => window.open(githubUrl, "_blank")}
        size="sm"
        variant="ghost"
      >
        <Icon as={FiGithub} mr={2} />
        Code
      </Button>
    </HStack>
  );
};
