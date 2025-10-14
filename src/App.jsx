import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Figma1 from "./components/Figma1";
import Figma2 from './components/Figma2';
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
          <Route path="/Beatflow" element={<Figma2 />} />
          <Route path="/figma1" element={<Figma1 />} />
        </Routes>
      ) : isAboutPage ? (
        // About Me page - full width container
        <div className="flex justify-center pt-24 px-4 min-h-screen">
          <div className="w-full md:w-3/4">
            <Navbar /> 
            <AboutMe />
          </div>
        </div>
      ) : (
        // Projects & other pages
        <div className="flex justify-center items-start min-h-screen pt-24">
          <div className="md:ml-0 ml-3 md:mr-0 mr-3 md:w-[50%] w-full">
            <Navbar /> 
            <Routes>
              <Route path="/" element={<Project />} />
            </Routes>

            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}


export default App;
