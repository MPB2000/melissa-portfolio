import { Text, TextProps } from "@chakra-ui/react";

interface CustomTextProps extends TextProps {
  variant?: "body" | "lead" | "caption" | "small";
}

export const Paragraph = ({
  variant = "body",
  color = "gray.600",
  fontFamily = "Inter, sans-serif",
  lineHeight = "tall",
  children,
  ...props
}: CustomTextProps) => {
  const variantStyles = {
    body: { fontSize: "md" },
    lead: { fontSize: "lg", fontWeight: "medium" },
    caption: { fontSize: "sm", opacity: 0.8 },
    small: { fontSize: "xs" },
  };

  return (
    <Text
      color={color}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </Text>
  );
};
