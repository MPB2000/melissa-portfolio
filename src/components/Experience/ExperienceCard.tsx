import { Box, VStack, Badge, HStack, Icon } from "@chakra-ui/react";
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  cardBg?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  borderColor?: string;
}

export const ExperienceCard = ({
  experience,
  cardBg = "colors.background.card",
  primaryTextColor = "colors.text.primary",
  secondaryTextColor = "colors.text.secondary",
  borderColor = "colors.border.subtle",
}: ExperienceCardProps) => {
  return (
    <Box
      w="full"
      bg={cardBg}
      p={8}
      borderRadius="lg"
      shadow="md"
      border="1px"
      borderColor={borderColor}
    >
      <VStack align="start" gap={4}>
        {/* Header */}
        <Box w="full">
          <HStack justify="space-between" align="start" mb={2} flexWrap="wrap">
            <VStack align="start" gap={1}>
              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="bold"
                color={primaryTextColor}
              >
                {experience.position}
              </Heading>
              <HStack>
                <Icon as={FiBriefcase} color="colors.blue.primary" />
                <Paragraph
                  variant="lead"
                  fontWeight="semibold"
                  color={primaryTextColor}
                >
                  {experience.company}
                </Paragraph>
              </HStack>
            </VStack>
            <VStack align="end" gap={1}>
              <HStack>
                <Icon as={FiCalendar} color={secondaryTextColor} />
                <Paragraph variant="caption" color={secondaryTextColor}>
                  {experience.duration}
                </Paragraph>
              </HStack>
              <HStack>
                <Icon as={FiMapPin} color={secondaryTextColor} />
                <Paragraph variant="caption" color={secondaryTextColor}>
                  {experience.location}
                </Paragraph>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box w="full" h="1px" bg={borderColor} />

        {/* Description */}
        <VStack align="start" gap={2}>
          {experience.description.map((item, idx) => (
            <HStack key={idx} align="start" gap={3}>
              <Box
                w="4px"
                h="4px"
                bg="colors.blue.primary"
                borderRadius="full"
                mt={2}
                flexShrink={0}
              />
              <Paragraph variant="body" color={secondaryTextColor}>
                {item}
              </Paragraph>
            </HStack>
          ))}
        </VStack>

        {/* Technologies */}
        <Box>
          <Paragraph
            variant="caption"
            fontWeight="semibold"
            color={primaryTextColor}
            mb={2}
          >
            Technologies Used:
          </Paragraph>
          <HStack flexWrap="wrap">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                colorScheme="blue"
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
    </Box>
  );
};
