import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProjectPage from "./components/PorjectPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactLayout from "./components/ContactLayout";
import PartnersLayout from "./components/PartnersLayout";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-grow flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/partners" element={<PartnersLayout />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
