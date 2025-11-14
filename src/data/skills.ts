import { FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import { IconType } from "react-icons";

interface SkillCategory {
  category: string;
  icon: IconType;
  techs: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: FiLayout,
    techs: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "AngularJS",
      "HTML",
    ],
  },
  {
    category: "Backend",
    icon: FiServer,
    techs: ["Java", "Spring MVC", "Node.js", "Express.js", "PHP"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    techs: ["MongoDB", "MySQL", "Firebase Realtime Database"],
  },
  {
    category: "Tools & Other",
    icon: FiCode,
    techs: ["GitHub", "Android Studio", "Expo", "C++", "Lua", "Roblox Studio"],
  },
];
