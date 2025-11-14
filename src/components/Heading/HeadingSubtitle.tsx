import { Heading } from ".";

interface HeadingSubtitleProps {
  children: React.ReactNode;
}

export const HeadingSubtitle = ({ children }: HeadingSubtitleProps) => {
  return (
    <Heading as="h2" fontSize="2xl" fontWeight="bold">
      {children}
    </Heading>
  );
};
