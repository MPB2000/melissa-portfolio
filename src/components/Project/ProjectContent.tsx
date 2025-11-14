"use client";

import { VStack, HStack, Box, Badge, Icon } from "@chakra-ui/react";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { FiFolder } from "react-icons/fi";

interface ProjectContentProps {
  title: string;
  description: string;
  technologies: string[];
}

export const ProjectContent = ({
  title,
  description,
  technologies,
}: ProjectContentProps) => {
  // Use semantic color tokens from theme
  const textColor = {
    primary: "colors.text.primary",
    secondary: "colors.text.secondary",
  };

  return (
    <VStack align="start" p={6} gap={4}>
      <HStack>
        <Icon as={FiFolder} color="colors.blue.primary" />
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="bold"
          color={textColor.primary}
        >
          {title}
        </Heading>
      </HStack>

      <Paragraph variant="caption" color={textColor.secondary}>
        {description}
      </Paragraph>

      <Box>
        <HStack flexWrap="wrap" gap={2}>
          {technologies.map((tech) => (
            <Badge
              key={tech}
              colorScheme="gray"
              variant="subtle"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
            >
              {tech}
            </Badge>
          ))}
        </HStack>
      </Box>
    </VStack>
  );
};
