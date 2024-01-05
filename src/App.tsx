import Header from "./components/Header";
import Stars from "./components/Stars";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import SkillsPage from "./pages/SkillsPage";
import ProjectLayout from "./components/ProjectLayout";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import Logout from "./components/Logout";
import ProfileLayout from "./components/Profile";
import { useEffect, useState } from "react";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Stars />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = (pathname: string) => {
    return pathname.includes("/auth/");
  };

  return (
    <>
      {!isAuthPage(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<AboutPage />} />
        <Route path="/pages/skills" element={<SkillsPage />} />
        <Route path="/pages/projects" element={<ProjectsPage />} />
        <Route path="/pages/projects/:slug" element={<ProjectLayout />} />
        <Route path="/pages/contact" element={<ContactPage />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/create-account" element={<CreateAccount />} />
        <Route path="/info/profile/:tab" element={<ProfileLayout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Routes>
      {!isAuthPage(location.pathname) && <Footer />}
    </>
  );
}

export default App;
