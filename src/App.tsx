import { Routes, Route } from "react-router-dom";
import Header from "./components/commonComponents/Header";
import HomePage from "../src/components/homePageComponents/HomePage";
import Footer from "../src/components/commonComponents/Footer";
import ProjectPage from "./components/projectPageComponets/ProjectPage";
import AboutUsPage from "./components/aboutUsPageLayouts/AboutUsPage";
import ContactLayout from "./components/generalLayOuts/ContactLayout";
import PartnersLayout from "./components/generalLayOuts/PartnersLayout";
import ServicePage from "./components/generalLayOuts/ServicePage";
import MobileMenu from "./components/MobileComponents/MobileMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-grow flex">
        <Routes>
          <Route path="/Payway-task" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/partners" element={<PartnersLayout />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/mobileMenu" element={<MobileMenu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
