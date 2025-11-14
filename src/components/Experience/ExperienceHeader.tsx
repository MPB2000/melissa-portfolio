import { Box, Heading, VStack } from "@chakra-ui/react";
import { Paragraph } from "../Paragraph";

interface ExperienceHeaderProps {
  title?: string;
  subtitle?: string;
}

export const ExperienceHeader = ({
  title = "Work Experience",
  subtitle = "My professional journey and the impact I've made along the way",
}: ExperienceHeaderProps) => {
  return (
    <Box textAlign="center" w="full">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="colors.light.text.primary"
        mb={4}
      >
        {title}
      </Heading>
      <Paragraph
        variant="lead"
        color="colors.text.secondary"
        maxW="600px"
        mx="auto"
      >
        {subtitle}
      </Paragraph>
    </Box>
  );
};
