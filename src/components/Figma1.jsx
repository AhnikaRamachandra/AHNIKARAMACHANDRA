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
  return (
    <div className=" bg-black">
    

 



<div className="flex justify-between items-center">
 
  <div className="text-gray-300 border-l-2  md:border-l-8 border-[#5F9448] ml-2 md:ml-20 pl-2 md:pl-6 inline-block">
    <h4 className="md:text-5xl text-2xl mb-2 md:mb-6">Let's</h4>
    <h4 className="md:text-5xl text-2xl mb-2 md:mb-6">Cook with</h4>
    <h1 className="md:text-6xl text-2xl ">Bitecraft</h1>
  </div>

 
  <img 
    className="w-[60%] h-auto" 
    src={mainrecipe} 
    alt="bitecraft" 
  />
</div>

  <img className="  w-full" src={overview} alt="bitecraft" />
   <img className="mt-16  w-full" src={typo} alt="bitecraft" />


  <img className="mt-5  w-full" src={onboardings} alt="bitecraft" />

<div className="flex items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
    Home Screen
  </h1>
</div>
  <img className="mt-2  w-full" src={homescreen} alt="bitecraft" />
<div className="flex items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
   Recipe View Screen
  </h1>
</div>
<div>
  <h4 className='md:mt-6  mt-4 text-sm md:text-2xl px-4 leading-relaxed text-[#D9D9D9]'>The Recipe View Screen displays a recipe’s name, rating, and user reviews, along with a detailed ingredients list and step by step cooking instructions. It include preparation time and interactive features like saving, sharing, and commenting, creating a seamless cooking experience.</h4>
  <img className="mt-[-40px] md:mt-[-80px] w-full" src={recipeview} alt="bitecraft" />
  
</div>
<div className="flex mt-[-10px] items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
   Search Screen
  </h1>
</div>    
<div>
  <h4 className='md:mt-6  mt-4 text-sm md:text-2xl px-4 leading-relaxed text-[#D9D9D9]'>The Search Screen lets users find recipes by typing a recipe name or using filters for cuisine, cooking time, difficulty, or dietary preferences, ensuring quick and relevant results.</h4>
  <img className="  w-full" src={search} alt="bitecraft" />
  
</div>    
<div className="flex mt-[-10px] items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
   Recipes from Your Favorites
  </h1>
</div>    
<div>
  <h4 className='md:mt-6  mt-4 text-sm md:text-2xl px-4 leading-relaxed text-[#D9D9D9]'>Discover and enjoy recipes from your favorite cooking creators, all gathered in one place. Explore their unique dishes, signature flavors, and personal cooking styles, making it easier than ever to connect with the food you love and the people who inspire it.</h4>
  <img className=" mt-[-40px] md:mt-[-80px] w-full" src={chef} alt="bitecraft" />
  
</div>   

<div className="flex mt-[-20px] items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448] md:text-4xl font-bold">
   Your Account
  </h1>
</div>    
<div>
  <h4 className='md:mt-6  mt-4 text-sm md:text-2xl px-4 leading-relaxed text-[#D9D9D9]'>Your personal cooking space browse and organize your saved recipes, revisit past posts, and proudly showcase the dishes you have shared with the community. It’s your hub to celebrate your food journey and keep all your culinary creations in one place.</h4>
  <img className=" mt-[-20px] " src={account} alt="bitecraft" />
  
</div> 
<div className="flex mt-[-20px] items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
   Wireframe
  </h1>
</div>  
 <img className="md:mt-16 mt-6 w-full" src={wire} alt="bitecraft" />

 <div className="flex mt-10 md:mt-20 items-center gap-4 pl-4">
  <span className="md:w-3 md:h-3 w-1 h-1 bg-[#5F9448] rounded-full"></span>
  <h1 className="text-[#5F9448]  md:text-4xl font-bold">
   Moodboard
  </h1>
</div>  
 <img className="md:mt-16 mt-6  w-full" src={moodboard} alt="bitecraft" />

  <h1 className="text-[#5F9448] text-center text-3xl p-6 md:text-4xl font-bold">
 Thank you
  </h1>

    </div>

  );
}

export default Figma1;
