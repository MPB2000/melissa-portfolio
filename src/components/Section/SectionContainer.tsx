import { Container } from "@chakra-ui/react";

interface SectionContainerProps {
  children: React.ReactNode;
  maxW?: string;
}

export const SectionContainer = ({
  children,
  maxW = "container.xl",
}: SectionContainerProps) => {
  return <Container maxW={maxW}>{children}</Container>;
};
