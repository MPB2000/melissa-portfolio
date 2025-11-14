"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { ExperienceContent } from "./ExperienceContent";
import { ExperienceFooter } from "./ExperienceFooter";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  children?: React.ReactNode;
  bgColor?: string;
}

export const Experience = ({ children, bgColor }: ExperienceProps) => {
  return (
    <Box as="section" id="experience" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack gap={12} align="start">
          {children}
        </VStack>
      </Container>
    </Box>
  );
};

Experience.Header = ExperienceHeader;
Experience.Content = ExperienceContent;
Experience.Footer = ExperienceFooter;
Experience.Card = ExperienceCard;
