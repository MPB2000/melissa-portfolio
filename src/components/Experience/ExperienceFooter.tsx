interface ExperienceFooterProps {
  children?: React.ReactNode;
}

export const ExperienceFooter = ({ children }: ExperienceFooterProps) => {
  if (!children) return null;
  return <>{children}</>;
};
