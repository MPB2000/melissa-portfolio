"use client";

import { Experience } from "@/components/Experience";
import { experiences } from "@/data/experiences";

export const Experiences = () => {
  return (
    <Experience bgColor="colors.background.subtle">
      <Experience.Header
        title="Work Experience"
        subtitle="My professional journey and the impact I've made along the way"
      />
      <Experience.Content experiences={experiences} />
    </Experience>
  );
};
