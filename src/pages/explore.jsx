import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../pages/gradient.css';
import image1 from '../nonveg.img/image1.png';
import image4 from '../nonveg.img/image4.png';
import veg2 from '../veg.img/veg2.png';
import veg3 from '../veg.img/veg3.png';
import dessert1 from '../dessert/dessert1.jpeg';
import dessert2 from '../dessert/dessert2.jpg';

function Explore() {
   
  const navigate = useNavigate();

  return (
    <>

        <footer className='flex justify-center items-center w-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF69B4] sticky top-0 z-50 '>
            <div className='px-10 py-2 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>CATEGORIES</h1>
            </div>
        </footer>

    {/* nonveg */}

    <div className="bg-[#0C104E] min-h-screen">

      <div className='flex lg:flex-row flex-col md:flex-row gap-2 mx-10 fade-delay-4 md:gap-8 slide-left shadow-xl shadow-white rounded-3xl'>
  
        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center   ">
    
    
          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[-8deg] z-0">
            <img src={image1} alt="page3" className="w-full h-full object-cover" />
          </div>

    
          <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-white shadow-xl transform rotate-[8deg] z-20 ">
            <img src={image4} alt="page1" className="w-full h-full object-cover" />
          </div>
          </div>

   

          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center text-white py-3 ">
            <h1 className='text-3xl md:text-5xl text-center mt-10'>❝𝐍𝐨𝐧-𝐕𝐞𝐠𝐞𝐭𝐚𝐫𝐢𝐚𝐧❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>"A flavorful delight for meat lovers — tender, juicy chicken slow-cooked with aromatic spices,
             fresh herbs, and a rich blend of sauces. Perfectly balanced to give every bite a burst of taste that will leave you wanting more."</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn md:px-4 px-6 py-2 text-white rounded-xl hover:scale-110 transition-transform duration-300 shadow-xl" onClick={() => navigate("/nonveg")}>Check Out</button>
          </div>
        </div>
     
      </div>


    {/* veg */}
      <div className='flex justify-evenly flex-col-reverse md:flex-row mx-10 mt-5 slide-right fade-delay-5 shadow-xl shadow-white rounded-3xl py-3'>


          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center  py-3 text-white">
            <h1 className='text-3xl md:text-5xl text-center mt-10'>❝𝐕𝐞𝐠𝐞𝐭𝐚𝐫𝐢𝐚𝐧❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>"Celebrate the vibrant flavors of nature’s finest ingredients. From garden-fresh veggies to wholesome, hearty meals —
            our recipes bring health, happiness, and harmony to your table. Cook with love, eat with joy, and nourish your body the vegetarian way!"</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn transition-transform duration-300 md:px-4 px-6 py-2 text-white rounded-xl shadow-xl hover:scale-110" onClick={() => navigate("/veg")}>Check Out</button>
          </div>
         </div>

        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 "> 
         
           <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[8deg] z-0 ">
            <img src={veg3} alt="page3" className="w-full h-full object-cover p-2" />
          </div>

          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-white shadow-xl transform rotate-[8deg] z-0">
            <img src={veg2} alt="page1" className="w-full h-full object-cover" />
          </div>
        </div>
     
      </div>


      {/* Dessert */}

      <div className='flex justify-evenly  flex-col md:flex-row mx-10 mt-5 slide-right fade-delay-5 shadow-xl shadow-white rounded-3xl py-3 '>
  
        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 ">
    
    
          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[-8deg] z-0">
            <img src={dessert1} alt="dessert1" className="w-full h-full object-cover rounded-4xl" />
          </div>

    
          <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[8deg] z-20 ">
            <img src={dessert2} alt="dessert2" className="w-full h-full object-cover rounded-4xl" />
           </div>
          </div>
   

          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center text-white py-3">
            <h1 className='text-3xl md:text-5xl text-center mt-10'>❝𝐃𝐞𝐬𝐬𝐞𝐫𝐭❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>“Dive into a bowl of freshness and crunch, Where every leaf, fruit, and nut comes alive with flavor.
            Our salads are a celebration of health, color, and pure delight-Nourish your body, energize your day, and savor the natural goodness in every bite!”</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn transition-transform duration-300 md:px-4 px-6 py-2 text-white rounded-xl shadow-xl hover:scale-110" onClick={() => navigate("/dessert")}>Check Out</button>
            </div>
          </div>
     
      </div>
     
      <footer className='mt-16 py-3 bg-gradient-to-r from-green-100 via-green-200 to-green-300'>
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
            <p className="text-center md:text-left text-sm md:text-base">
            © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
            </p>
          </div>  
      </footer>
    </div> 



    </>  
  );
}

export default Explore;