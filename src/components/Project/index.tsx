"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { ProjectContent } from "./ProjectContent";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectFooter } from "./ProjectFooter";

export interface ProjectProps extends BoxProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const Project = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured,
  bg = "white",
  borderColor = "gray.200",
  ...props
}: ProjectProps) => {
  return (
    <Box
      bg={bg}
      borderRadius="lg"
      shadow="md"
      border="1px"
      borderColor={borderColor}
      overflow="hidden"
      {...props}
    >
      <ProjectHeader
        image={image}
        title={title}
        liveUrl={liveUrl}
        githubUrl={githubUrl}
        featured={featured}
      />
      <ProjectContent
        title={title}
        description={description}
        technologies={technologies}
      />
      <ProjectFooter liveUrl={liveUrl} githubUrl={githubUrl} />
    </Box>
  );
};

// Attach sub-components
Project.Content = ProjectContent;
Project.Header = ProjectHeader;
Project.Footer = ProjectFooter;

export { Project };
