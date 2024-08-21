import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Stars,
  Footer,
  ProjectLayout,
  ProfileLayout,
  ScrollToTop,
} from "./components";
import { Home, ProjectsPage, NotFound, Blog } from "./pages";

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
  return (
    <>
      <ScrollToTop />
      <main className="flex flex-col min-h-screen justify-between">
        <div role="main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/projects" element={<ProjectsPage />} />
            <Route path="/pages/projects/:slug" element={<ProjectLayout />} />
            <Route path="/pages/blog" element={<Blog />} />
            <Route path="/info/profile/:tab" element={<ProfileLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
