import { Link, useLocation } from "react-router-dom";
import moodboard from '../assets/moodboardbitecraft.png'
import bite1 from '../assets/bitecraft1.png'
import bite2 from '../assets/bite2.png'
import mainrecipe from '../assets/biteright.png'
import overview from '../assets/Overview.png'
import typo from '../assets/Colour&Typo.png'
import onboardings from '../assets/Onboardings.png'
import homescreen from '../assets/Homescreenbite.png'
import recipeview from '../assets/Recipeview.png'
import search from '../assets/Searchbite.png'
import chef from '../assets/Chef.png'
import account from '../assets/Myaccount.png'
import wire from '../assets/Blackwireframe.png'

function Figma1() {
  const { pathname } = useLocation();

  return (
    <div className="bg-black">
      {/* Top navigation bar */}
      <div className="w-full fixed top-0 left-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center px-2 py-3 gap-10 text-md">
          <Link
            to="/"
            className={`pb-1 border-b-1 transition-all font-semibold duration-300 ${
              pathname === "/"
                ? "border-[#5F9448] text-[#5F9448] font-medium"
                : "border-transparent text-gray-300 hover:text-[#5F9448] hover:border-[#5F9448]"
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`pb-1 border-b-1 transition-all font-semibold duration-300 ${
              pathname === "/about"
                ? "border-[#5F9448] text-[#5F9448] font-medium"
                : "border-transparent text-gray-300 hover:text-[#5F9448] hover:border-[#5F9448]"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>

      {/* top padding to prevent overlap  */}
      <div className="pt-20">

        {/* Main content */}
        <div className="flex justify-between items-center">
          <div className="text-gray-300 border-l-2 md:border-l-8 border-[#5F9448] ml-2 md:ml-20 pl-2 md:pl-6 inline-block">
            <h4 className="md:text-5xl text-2xl mb-2 md:mb-6">Let's</h4>
            <h4 className="md:text-5xl text-2xl mb-2 md:mb-6">Cook with</h4>
            <h1 className="md:text-6xl text-2xl">Bitecraft</h1>
          </div>

          <img className="w-[60%] h-auto" src={mainrecipe} alt="bitecraft" />
        </div>

        <img className="w-full" src={overview} alt="bitecraft" />
        <img className="mt-16 w-full" src={typo} alt="bitecraft" />
        <img className="mt-5 w-full" src={onboardings} alt="bitecraft" />

        {/* Repeat your sections here as before */}
        <div className="flex items-center gap-4 pl-4 mt-10">
          <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
          <h1 className="text-[#5F9448] md:text-4xl font-bold">Home Screen</h1>
        </div>
        <img className="mt-2 w-full" src={homescreen} alt="bitecraft" />

        <div className="flex items-center gap-4 pl-4 mt-10">
          <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
          <h1 className="text-[#5F9448] md:text-4xl font-bold">Recipe View Screen</h1>
        </div>
        <h4 className="md:mt-6 mt-4 text-sm md:text-2xl px-4 leading-relaxed text-[#D9D9D9]">
          The Recipe View Screen displays a recipe’s name, rating, and user reviews, along with a detailed ingredients list and step by step cooking instructions. It includes preparation time and interactive features like saving, sharing, and commenting, creating a seamless cooking experience.
        </h4>
        <img className="mt-[-40px] md:mt-[-80px] w-full" src={recipeview} alt="bitecraft" />

        {/* Continue adding the rest of your sections (Search, Chef, Account, Wireframe, Moodboard) exactly like before */}

        <h1 className="text-[#5F9448] text-center text-3xl p-6 md:text-4xl font-bold">
          Thank you
        </h1>
      </div>
    </div>
  );
}

export default Figma1;
