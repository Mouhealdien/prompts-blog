import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prompt from "./pages/Prompt";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-pingar xl:px-40 sm:px-10 px-5 xl:py-20 py-10 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:id" element={<Prompt />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
