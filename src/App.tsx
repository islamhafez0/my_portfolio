import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import {
  Header,
  Stars,
  Footer,
  ProjectLayout,
  Logout,
  ProfileLayout,
} from "./components";

import {
  Login,
  Home,
  AboutPage,
  ProjectsPage,
  ContactPage,
  SkillsPage,
  CreateAccount,
  NotFound,
  Blog,
} from "./pages";

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
