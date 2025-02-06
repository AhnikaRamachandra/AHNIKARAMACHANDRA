import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Project from "./components/Project"


function App() {
 

  return (
    <>
   <div className="flex justify-center items-center h-screen">
  <div className=" md:ml-0 ml-3 md:mr-0 mr-3 md:w-[50%] h-full">
  <Navbar/>
   <Project/>
   <Experience/>
   <Cards/>
   <Contact/>
   <Footer/>
  
  </div>
</div>

    </>
  )
}

export default App
