"use client";

import {
  Box,
  Flex,
  HStack,
  Stack,
  Container,
  Link as ChakraLink,
  useDisclosure as useChakraDisclosure
} from "@chakra-ui/react";
import { Paragraph } from "@/components/Paragraph";
import { Button } from "@/components/Button";
import { ColorModeButton } from "@/components/ColorMode";

interface NavLinkProps {
  children: string;
  href: string;
  onClick?: () => void;
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <ChakraLink
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: "colors.background.hover",
      }}
      href={href}
      onClick={onClick}
    >
      <Paragraph variant="body" color="colors.text.primary">
        {children}
      </Paragraph>
    </ChakraLink>
  );
};

export const Header = () => {
  const disclosure = useChakraDisclosure();
  const isOpen = disclosure.open;
  const onClose = disclosure.onClose;
  const onOpen = disclosure.onOpen;

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      bg="colors.background.card"
      px={4}
      shadow="sm"
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      borderBottom="1px"
      borderColor="colors.border.subtle"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack gap={8} alignItems="center">
            <Box>
              <Paragraph
                variant="lead"
                color="colors.blue.primary"
                fontWeight="bold"
              >
                Melissa.dev
              </Paragraph>
            </Box>
          </HStack>

          <HStack
            as="nav"
            gap={4}
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </NavLink>
            ))}
          </HStack>

          <HStack gap={4}>
            <ColorModeButton />

            <Button
              size="sm"
              bg="colors.blue.primary"
              color="colors.text.inverse"
              display={{ base: "none", md: "inline-flex" }}
              onClick={() => handleNavClick("#contact")}
            >
              Contact Me
            </Button>

            <Button
              variant="ghost"
              size="sm"
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            >
              {isOpen ? "✕" : "☰"}
            </Button>
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" gap={4}>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Flex justify="space-between" align="center">
                <Button
                  size="sm"
                  bg="colors.blue.primary"
                  color="colors.text.inverse"
                  onClick={() => handleNavClick("#contact")}
                >
                  Contact Me
                </Button>
                <ColorModeButton />
              </Flex>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};
