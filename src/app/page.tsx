import { About } from "@/components/Sections/About";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";
import { Experiences } from "@/components/Sections/Experiences";
import { Home } from "@/components/Sections/Home";
import { Box } from "@chakra-ui/react";
import { Projects } from "@/components/Sections/Projects";

export default function Page() {
  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </Box>
  );
}
