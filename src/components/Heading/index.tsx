import { HeadingProps, Heading as ChakraHeading, Box } from "@chakra-ui/react";
import { HeadingTitle } from "./HeadingTitle";
import { HeadingSubtitle } from "./HeadingSubtitle";

export const Heading = (props: HeadingProps) => {
  return (
    <Box textAlign={props.textAlign} w="full">
      <ChakraHeading
        {...props}
        as="h1"
        fontSize={props.fontSize ?? "4xl"}
        fontWeight={props.fontWeight}
        color={props.color}
        fontFamily={props.fontFamily}
        lineHeight={props.lineHeight}
        mb={props.mb}
        size={props.size}
      >
        {props.children}
      </ChakraHeading>
    </Box>
  );
};

Heading.Title = HeadingTitle;
Heading.Subtitle = HeadingSubtitle;

const Test = () => {
  return (
    <Heading as="h1" fontSize="4xl" color="blue.500" textAlign="center">
      <Heading.Title>Main Title</Heading.Title>
      <Heading.Subtitle>Subtitle text</Heading.Subtitle>
    </Heading>
  );
};
