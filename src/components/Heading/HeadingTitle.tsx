import { Heading } from ".";

interface HeadingTitleProps {
  children: React.ReactNode;
}

export const HeadingTitle = ({ children }: HeadingTitleProps) => {
  return <Heading>{children}</Heading>;
};
