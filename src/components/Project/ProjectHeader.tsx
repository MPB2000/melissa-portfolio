"use client";

import { Box, Image, Badge, HStack, Button, Icon } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectHeaderProps {
  image: string;
  title: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const ProjectHeader = ({
  image,
  title,
  liveUrl,
  githubUrl,
  featured,
}: ProjectHeaderProps) => {
  return (
    <Box position="relative">
      <Image
        src={image}
        alt={title}
        w="full"
        h="200px"
        objectFit="cover"
        bg="colors.background.muted"
      />
      {featured && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          bg="colors.blue.primary"
          color="colors.text.inverse"
          px={2}
          py={1}
          borderRadius="md"
        >
          Featured
        </Badge>
      )}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="colors.overlay.dark"
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HStack gap={4}>
          <Button
            onClick={() => window.open(liveUrl, "_blank")}
            size="sm"
            bg="colors.blue.primary"
            color="colors.text.inverse"
          >
            <Icon as={FiExternalLink} mr={2} />
            Live Demo
          </Button>
          <Button
            onClick={() => window.open(githubUrl, "_blank")}
            size="sm"
            variant="outline"
            bg="colors.gray.primary"
            color="colors.text.inverse"
          >
            <Icon as={FiGithub} mr={2} />
            Code
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
