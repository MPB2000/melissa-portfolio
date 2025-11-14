import {
  Button as ChakraButton,
  ButtonProps,
  Stack,
  Link,
} from "@chakra-ui/react";

interface Props extends ButtonProps {
  href?: string;
}

export const Button = ({ children, href, ...props }: Props) => {
  return href ? (
    <Link href={href} _hover={{ textDecoration: "none" }}>
      <ChakraButton {...props}>{children}</ChakraButton>
    </Link>
  ) : (
    <ChakraButton {...props}>{children}</ChakraButton>
  );
};
