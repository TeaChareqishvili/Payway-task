import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProjectPage from "./components/PorjectPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-grow flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
