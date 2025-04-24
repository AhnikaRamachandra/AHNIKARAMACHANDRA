import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Figma1 from "./components/Figma1";
import Figma2 from './components/Figma2'
import Cards from "./components/Cards";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const location = useLocation(); 

  
  const isFigmaPage = ["/figma1","/Beatflow"].includes(location.pathname);

  return (
    <>
    
    {isFigmaPage ? (
        // Render Figma pages without the layout wrapper
        <Routes>
          <Route path="/figma1" element={<Figma1 />} />
          <Route path="/Beatflow" element={<Figma2 />} />
        
        </Routes>
      ) : (
        // Default layout for all other pages
        <div className="flex justify-center items-center h-screen">
          <div className="md:ml-0 ml-3 md:mr-0 mr-3 md:w-[50%] h-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Project />} />
            </Routes>
            <Cards />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
