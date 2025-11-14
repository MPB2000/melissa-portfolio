import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import { ButtonIcon } from "./ButtonIcon";
import { ButtonText } from "./ButtonText";

export const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      variant={props.variant ?? "solid"}
      bg={props.bg ?? (props.variant === "solid" ? "primary.500" : "transparent")}
      color={props.color ?? (props.variant === "solid" ? "white" : "text.primary")}
      borderColor={props.borderColor ?? "border.default"}
      loading={props.loading || false}
      loadingText={props.loadingText || "Loading..."}
      spinnerPlacement="start"
      rounded="md"
      _hover={{
        bg: props.variant === "solid" 
          ? "primary.600"
          : props.bg ?? "blackAlpha.50",
        _dark: {
          bg: props.variant === "solid"
            ? "primary.400"
            : "whiteAlpha.100"
        }
      }}
    >
      {props.children}
    </ChakraButton>
  );
};

Button.Icon = ButtonIcon;
Button.Text = ButtonText;

const Test = () => {
  return (
    <Button backgroundColor="blue.500" color={"bg.success"}>
      <Button.Icon icon={<span>📧</span>} />
      <Button.Text>Get In Touch</Button.Text>
    </Button>
  );
};
