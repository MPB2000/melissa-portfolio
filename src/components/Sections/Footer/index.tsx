"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Link as ChakraLink,
  Input,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiChevronUp,
} from "react-icons/fi";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Button } from "@/components/Button";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <Box as="footer" bg="colors.background.subtle">
      {/* Contact Section */}
      <Box as="section" id="contact" py={20}>
        <Container maxW="container.xl">
          <VStack gap={12} align="start">
            <Box textAlign="center" w="full">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign="center"
              >
                Contact
              </Heading>
              <Paragraph
                variant="lead"
                color="colors.text.secondary"
                maxW="600px"
                mx="auto"
              >
                Feel free to contact me by submitting the form below and I will
                get back to you as soon as possible
              </Paragraph>
            </Box>

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} w="full">
              {/* Contact Info */}
              <VStack align="start" gap={8}>
                <Box>
                  <Heading as="h3" fontSize="2xl" mb={6}>
                    Let's Connect
                  </Heading>
                  <VStack align="start" gap={4}>
                    <HStack>
                      <Icon
                        as={FiMail}
                        color="colors.blue.primary"
                        boxSize={5}
                      />
                      <Paragraph>melissapb2000@gmail.com</Paragraph>
                    </HStack>
                    <HStack>
                      <Icon
                        as={FiPhone}
                        color="colors.blue.primary"
                        boxSize={5}
                      />
                      <Paragraph>+60 169283778</Paragraph>
                    </HStack>
                    <HStack>
                      <Icon
                        as={FiMapPin}
                        color="colors.blue.primary"
                        boxSize={5}
                      />
                      <Paragraph>Shah Alam, 40000 Malaysia</Paragraph>
                    </HStack>
                  </VStack>
                </Box>

                <Box>
                  <Paragraph variant="lead" mb={4}>
                    Follow Me
                  </Paragraph>
                  <HStack gap={4}>
                    <ChakraLink
                      href="https://github.com/melissaboudville"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Icon as={FiGithub} mr={2} />
                        GitHub
                      </Button>
                    </ChakraLink>
                    <ChakraLink
                      href="https://www.linkedin.com/in/melissaboudville"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Icon as={FiLinkedin} mr={2} />
                        LinkedIn
                      </Button>
                    </ChakraLink>
                  </HStack>
                </Box>
              </VStack>

              {/* Contact Form */}
              <Box>
                <form onSubmit={handleSubmit}>
                  <VStack gap={6}>
                    <Box w="full">
                      <Paragraph variant="caption" mb={2}>
                        Name *
                      </Paragraph>
                      <Input
                        placeholder="Enter Your Name"
                        bg="colors.background.input"
                        border="1px"
                        borderColor="colors.border.subtle"
                        _hover={{ borderColor: "colors.border.hover" }}
                        _focus={{
                          borderColor: "colors.blue.primary",
                          boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                        }}
                        required
                      />
                    </Box>

                    <Box w="full">
                      <Paragraph variant="caption" mb={2}>
                        Email *
                      </Paragraph>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        bg="colors.background.input"
                        border="1px"
                        borderColor="colors.border.subtle"
                        _hover={{ borderColor: "colors.border.hover" }}
                        _focus={{
                          borderColor: "colors.blue.primary",
                          boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                        }}
                        required
                      />
                    </Box>

                    <Box w="full">
                      <Paragraph variant="caption" mb={2}>
                        Message *
                      </Paragraph>
                      <Textarea
                        placeholder="Enter Your Message"
                        rows={6}
                        bg="colors.background.input"
                        border="1px"
                        borderColor="colors.border.subtle"
                        _hover={{ borderColor: "colors.border.hover" }}
                        _focus={{
                          borderColor: "colors.blue.primary",
                          boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
                        }}
                        required
                      />
                    </Box>

                    <Button
                      type="submit"
                      size="lg"
                      bg="colors.blue.primary"
                      color="colors.text.inverse"
                      w="full"
                      _hover={{
                        bg: "colors.blue.hover",
                        transform: "translateY(-2px)",
                      }}
                    >
                      <Icon as={FiSend} mr={2} />
                      Submit
                    </Button>
                  </VStack>
                </form>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer Bottom */}
      <Box borderTop="1px" borderColor="colors.border.subtle" py={6}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <VStack align={{ base: "center", md: "start" }} gap={2}>
              <Paragraph
                variant="lead"
                color="colors.blue.primary"
                fontWeight="bold"
              >
                Melissa Paige Boudville
              </Paragraph>
              <Paragraph variant="caption" color="colors.text.secondary">
                Software Developer with 1 year of experience delivering
                innovative, user-centric solutions across web and mobile
                platforms
              </Paragraph>
            </VStack>

            <VStack align={{ base: "center", md: "end" }} gap={2}>
              <Paragraph variant="caption" color="colors.text.secondary">
                © 2025 Melissa Paige Boudville. All rights reserved.
              </Paragraph>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <Button
          aria-label="Back to top"
          position="fixed"
          bottom="30px"
          right="30px"
          size="lg"
          bg="colors.blue.primary"
          color="colors.text.inverse"
          borderRadius="full"
          boxShadow="lg"
          zIndex={1000}
          onClick={scrollToTop}
          _hover={{
            bg: "colors.blue.hover",
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
        >
          <Icon as={FiChevronUp} />
        </Button>
      )}
    </Box>
  );
};
