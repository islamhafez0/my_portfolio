import Hero from "../Hero";
import AboutPage from "../../pages/About";
import ProjectsPage from "../../pages/Projects";
import ContactPage from "../../pages/Contact";
import SkillsPage from "../../pages/SkillsPage";
import ScrollProgress from "../ScrollProgress";

const ContentWrapper = () => {
  return (
    <main>
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <ScrollProgress />
    </main>
  );
};

export default ContentWrapper;
