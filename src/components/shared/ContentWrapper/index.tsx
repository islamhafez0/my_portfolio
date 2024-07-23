import Hero from "../../layouts/Hero";
import ProjectsPage from "../../../pages/Projects";
import ScrollProgress from "../ScrollProgress";
import SkillsLayout from "../../layouts/SkillsLayout";
import AboutLayout from "../../layouts/AboutLayout";
import ContactLayout from "../../layouts/ContactLayout";

export const ContentWrapper = () => {
  return (
    <main className="mt-[100px] z-50">
      <Hero />
      <AboutLayout />
      <SkillsLayout />
      <ProjectsPage />
      <ContactLayout />
      <ScrollProgress />
    </main>
  );
};
