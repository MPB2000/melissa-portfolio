import { ReactElement } from "react";

interface ButtonIconProps {
  icon: ReactElement;
  position?: "left" | "right";
}

export const ButtonIcon = ({ icon, position = "left" }: ButtonIconProps) => {
  return icon;
};
