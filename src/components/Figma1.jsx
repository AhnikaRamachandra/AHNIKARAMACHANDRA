import img2 from '../assets/desk2.png';

function Figma1() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold text-gray-900">Figma Design Details</h1>
      <img className="rounded-lg mt-4 w-full" src={img2} alt="Figma Design" />
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
