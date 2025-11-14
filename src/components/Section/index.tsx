import { Box, BoxProps } from "@chakra-ui/react";
import { SectionContainer } from "./SectionContainer";

interface SectionProps extends Omit<BoxProps, "as"> {
  children?: React.ReactNode;
  id?: string;
  bg?: string;
  color?: string;
  minH?: string;
  display?: string;
  alignItems?: string;
  as?: "section" | "div" | "article" | "main" | "aside";
}

export const Section = ({
  children,
  id,
  bg = "colors.background.default",
  color = "colors.text.primary",
  minH = "100vh",
  display = "flex",
  alignItems = "center",
  as = "section",
  ...props
}: SectionProps) => {
  return (
    <Box
      as={as}
      id={id}
      bg={bg}
      color={color}
      minH={minH}
      display={display}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </Box>
  );
};

Section.Container = SectionContainer;

const Test = () => {
  return (
    <Section id="home" bg="colors.background.subtle" py="20">
      <Section.Container>
        <div>Section content</div>
      </Section.Container>
    </Section>
  );
};
