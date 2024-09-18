import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="flex-grow"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;
