"use client";

import { Box, VStack, SimpleGrid } from "@chakra-ui/react";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { Project } from "@/components/Project";

const projects = [
  {
    title: "GEBME Web Portal",
    description:
      "Developed a robust web portal for menu management, incorporating role-based access control, dynamic UI components, and seamless backend integration. Utilized Spring MVC for the backend and AngularJS for the frontend to manage store menus efficiently.",
    image: "/api/placeholder/400/250",
    technologies: ["Spring MVC", "AngularJS", "Java", "HTML", "CSS"],
    liveUrl: "https://gebme.com.my",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Shopbuddies",
    description:
      "Created an e-commerce platform with category-based sorting, cart and checkout features, and an admin panel for product management. Built as a Bootstrap project showcasing full-stack development skills.",
    image: "/api/placeholder/400/250",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    liveUrl: "https://shopbuddies.vercel.app",
    githubUrl: "https://github.com/melissaboudville/shopbuddies",
    featured: true,
  },
  {
    title: "INTI CarPark",
    description:
      "Developed a car park reservation system featuring real-time updates, notifications, and a user-friendly interface using Firebase for database integration. Built for Android platform with modern mobile development practices.",
    image: "/api/placeholder/400/250",
    technologies: ["Java", "Android Studio", "Firebase", "XML"],
    liveUrl: "#",
    githubUrl: "https://github.com/melissaboudville/INTICarPark",
    featured: false,
  },
  {
    title: "StarlingRNFApp",
    description:
      "Built a restaurant table reservation app with additional features for catering orders and feedback forms, integrating MySQL and PHP APIs for backend functionality. Focused on seamless user experience and robust data management.",
    image: "/api/placeholder/400/250",
    technologies: ["Java", "Android Studio", "MySQL", "PHP", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/melissaboudville/StarlingRNFApp",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <Section id="projects">
      <Section.Container>
        <VStack gap={12} align="start">
          <Box textAlign="center" w="full">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
            >
              <Heading.Title>Projects</Heading.Title>
              <Heading.Subtitle>
                Here you will find some of the personal and client projects that
                I created
              </Heading.Subtitle>
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {projects.map((project, index) => (
              <Project
                key={index}
                {...project}
                bg="colors.light.card"
                borderColor="colors.light.border"
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Section.Container>
    </Section>
  );
};
