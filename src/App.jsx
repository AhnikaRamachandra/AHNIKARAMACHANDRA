import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Figma1 from "./components/Figma1";
import Figma2 from './components/Figma2';
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  const location = useLocation(); 

  const isFigmaPage = ["/figma1", "/Beatflow"].includes(location.pathname);
  const isAboutPage = location.pathname === "/about";

  return (
    <>
      {isFigmaPage ? (
        // Figma pages only
        <Routes>
          <Route path="/figma1" element={<Figma1 />} />
          <Route path="/Beatflow" element={<Figma2 />} />
        </Routes>
      ) : (
        <div className="flex justify-center items-start min-h-screen">
          <div className="md:ml-0 ml-3 md:mr-0 mr-3 md:w-[50%] w-full">
          
            {!isAboutPage && <Navbar />}
            <Routes>
              <Route path="/" element={<Project />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
            {!isAboutPage && (
              <>
              
                <Contact />
                <Footer />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
