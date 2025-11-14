"use client";

import { VStack, HStack, Box } from "@chakra-ui/react";
import { FiMail, FiDownload } from "react-icons/fi";
import { Button } from "../../Button";
import { Section } from "../../Section";
import { Heading } from "../../Heading";
import { Paragraph } from "../../Paragraph";
import { DownloadTrigger } from "@chakra-ui/react";

const resumeData = async () => {
  const res = await fetch("/Melissa_Boudville_Software_Developer.pdf");
  return res.blob();
};

export const Home = () => {
  const handleContactScroll = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="home">
      <Section.Container>
        <VStack align="start" gap={8}>
          <Home.Intro />
          <Home.Actions onContactClick={handleContactScroll} />
          <Home.ScrollIndicator />
        </VStack>
      </Section.Container>
    </Section>
  );
};

const HomeIntro = () => (
  <Box>
    <Paragraph
      variant="lead"
      color="colors.light.text.primary"
      opacity={0.9}
      mb={4}
    >
      Hello, I'm
    </Paragraph>

    <Heading
      as="h1"
      fontSize={{ base: "5xl", md: "6xl" }}
      fontWeight="bold"
      lineHeight="shorter"
      mb={6}
      color="colors.light.text.primary"
    >
      Melissa Paige Boudville
    </Heading>

    <Paragraph
      fontSize="xl"
      color="colors.light.text.secondary"
      opacity={0.9}
      maxW="600px"
      lineHeight="tall"
      mb={8}
    >
      A passionate Software Developer with 1 year of experience delivering
      innovative, user-centric solutions across web and mobile platforms. I
      specialize in TypeScript, JavaScript, React, and React Native.
    </Paragraph>
  </Box>
);

const HomeActions = ({ onContactClick }: { onContactClick: () => void }) => (
  <HStack gap={4} flexWrap="wrap">
    <Button
      bg="colors.light.bg"
      color="colors.primary.600"
      _hover={{
        bg: "colors.gray.100",
        transform: "translateY(-2px)",
      }}
      onClick={onContactClick}
    >
      <Button.Icon icon={<FiMail />} />
      <Button.Text>Get In Touch</Button.Text>
    </Button>

    <DownloadTrigger
      data={resumeData}
      fileName="Melissa_Boudville_Software_Developer.pdf"
      mimeType="application/pdf"
      asChild
    >
      <Button
        variant="outline"
        borderColor="colors.light.text.primary"
        color="colors.light.text.primary"
        _hover={{
          bg: "colors.light.bg",
          color: "colors.primary.600",
          transform: "translateY(-2px)",
        }}
        rel="noopener noreferrer"
      >
        <Button.Icon icon={<FiDownload />} />
        <Button.Text>Download Resume</Button.Text>
      </Button>
    </DownloadTrigger>
  </HStack>
);

const HomeScrollIndicator = () => (
  <Box mt={12}>
    <Paragraph color="colors.light.text.secondary">
      Scroll down to explore my work
    </Paragraph>
    <Box
      w="2px"
      h="50px"
      bg="colors.light.text.primary"
      opacity={0.5}
      mx="auto"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-4px",
        width: 0,
        height: 0,
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "10px solid currentColor",
      }}
    />
  </Box>
);

// Attach sub-components to main component
Home.Intro = HomeIntro;
Home.Actions = HomeActions;
Home.ScrollIndicator = HomeScrollIndicator;
