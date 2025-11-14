import { VStack } from "@chakra-ui/react";
import { ExperienceCard } from "./ExperienceCard";

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface ExperienceContentProps {
  experiences: Experience[];
  cardBg?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  borderColor?: string;
}

export const ExperienceContent = ({
  experiences,
  cardBg = "colors.background.card",
  primaryTextColor = "colors.text.primary",
  secondaryTextColor = "colors.text.secondary",
  borderColor = "colors.border.subtle",
}: ExperienceContentProps) => {
  return (
    <VStack gap={8} w="full">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          experience={exp}
          cardBg={cardBg}
          primaryTextColor={primaryTextColor}
          secondaryTextColor={secondaryTextColor}
          borderColor={borderColor}
        />
      ))}
    </VStack>
  );
};
