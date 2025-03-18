
import img from '../assets/final.png'
function Figma1() {
  return (
    <div className="   shadow-lg rounded-lg ml-14 mt-8 mr-14 bg-white">
    
      <img className="rounded-lg  w-full" src={img} alt="Figma Design" />
      <p className="mt-4 text-gray-700">
        This design was created using Figma, focusing on user experience, accessibility, and a modern interface.
      </p>
      <a 
        href="https://www.figma.com/file/YOUR-FIGMA-LINK" 
      
        className="mt-6 inline-block bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
      >
        View on Figma
      </a>
    </div>
  );
}

export default Figma1;
