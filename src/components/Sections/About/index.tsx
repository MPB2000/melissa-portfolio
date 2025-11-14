"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { skills } from "@/data/skills";

export const About = () => {
  return (
    <Box as="section" id="about" py={20} bg="colors.background.card">
      <Container maxW="container.xl">
        <VStack gap={12} align="start">
          <Box textAlign="center" w="full">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="colors.text.primary"
              mb={4}
              fontFamily="heading"
            >
              About Me
            </Heading>
            <Text
              fontSize="lg"
              color="colors.text.secondary"
              maxW="600px"
              mx="auto"
              fontFamily="body"
            >
              Get to know more about who I am, what I do, and what skills I have
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} w="full">
            {/* Personal Info */}
            <VStack align="start" gap={6}>
              <Box>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="colors.text.primary"
                  mb={4}
                  fontFamily="heading"
                >
                  Get to know me!
                </Heading>
                <VStack align="start" gap={4}>
                  <Text
                    fontSize="md"
                    color="colors.text.secondary"
                    lineHeight="tall"
                    fontFamily="body"
                  >
                    I'm a <strong>Software Developer</strong> with 1 year of
                    experience delivering innovative, user-centric solutions
                    across web and mobile platforms. Proficient in TypeScript,
                    JavaScript, React, and React Native, with a strong track
                    record of building scalable, high-performance applications.
                  </Text>
                  <Text
                    fontSize="md"
                    color="colors.text.secondary"
                    lineHeight="tall"
                    fontFamily="body"
                  >
                    I have experience in{" "}
                    <strong>agile development environments</strong>,
                    collaborating closely with cross-functional teams to ensure
                    seamless project delivery and continuous product refinement.
                    I'm passionate about leveraging modern technologies to solve
                    real-world problems and craft intuitive, impactful user
                    experiences.
                  </Text>
                  <Text
                    fontSize="md"
                    color="colors.text.secondary"
                    lineHeight="tall"
                    fontFamily="body"
                  >
                    I'm open to <strong>job opportunities</strong> where I can
                    contribute, learn and grow. If you have a good opportunity
                    that matches my skills and experience then don't hesitate to{" "}
                    <strong>contact me</strong>.
                  </Text>
                </VStack>
              </Box>
            </VStack>

            {/* Skills */}
            <VStack align="start" gap={6}>
              <Box>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontWeight="semibold"
                  color="colors.text.primary"
                  mb={6}
                  fontFamily="heading"
                >
                  My Skills
                </Heading>
                <VStack gap={6} align="start">
                  {skills.map((skillCategory) => (
                    <Box key={skillCategory.category} w="full">
                      <HStack mb={3}>
                        <Icon
                          as={skillCategory.icon}
                          color="colors.blue.primary"
                          boxSize={5}
                        />
                        <Text
                          fontSize="lg"
                          fontWeight="semibold"
                          color="colors.text.primary"
                          fontFamily="body"
                        >
                          {skillCategory.category}
                        </Text>
                      </HStack>
                      <Box>
                        {skillCategory.techs.map((tech) => (
                          <Badge
                            key={tech}
                            colorScheme="blue"
                            variant="subtle"
                            mr={2}
                            mb={2}
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
