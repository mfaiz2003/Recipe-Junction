import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../pages/gradient.css';
import image1 from '../nonveg.img/image1.png';
import image4 from '../nonveg.img/image4.png';
import veg2 from '../veg.img/veg2.png';
import veg3 from '../veg.img/veg3.png';
import salad1 from '../salad/salad1.jpg';
import salad2 from '../salad/salad2.jpg';
import pic1 from '../fastfood/pic1.jpg';
import pic2 from'../fastfood/pic2.jpg';

function Explore() {
   
  const navigate = useNavigate();

  return (
    <>
    {/* nonveg */}
      <div className='flex justify-evenly  flex-col md:flex-row mx-10 slide-left fade-delay-4 shadow-xl rounded-3xl py-3'>
  
        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 ">
    
    
          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[-8deg] z-0">
            <img src={image1} alt="page3" className="w-full h-full object-cover" />
          </div>

    
          <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-white shadow-xl transform rotate-[8deg] z-20 ">
            <img src={image4} alt="page1" className="w-full h-full object-cover" />
           </div>
          </div>
   

          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center bg-gradient-to-r via-blue-100 py-3">
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-10'>❝𝐍𝐨𝐧-𝐕𝐞𝐠𝐞𝐭𝐚𝐫𝐢𝐚𝐧❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>"A flavorful delight for meat lovers — tender, juicy chicken slow-cooked with aromatic spices,
             fresh herbs, and a rich blend of sauces. Perfectly balanced to give every bite a burst of taste that will leave you wanting more."</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn md:px-4 px-6 py-2 text-white rounded-xl hover:scale-110 transition-transform duration-300 shadow-xl" onClick={() => navigate("/nonveg")}>Check Out</button>
            </div>
          </div>
     
      </div>


    {/* veg */}
    <div className='flex justify-evenly flex-col-reverse md:flex-row mx-10 mt-5 slide-right fade-delay-5 shadow-xl rounded-3xl py-3'>


          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center bg-gradient-to-r via-green-100 py-3">
            <h1 className='\text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-10'>❝𝐕𝐞𝐠𝐞𝐭𝐚𝐫𝐢𝐚𝐧❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>"Celebrate the vibrant flavors of nature’s finest ingredients. From garden-fresh veggies to wholesome, hearty meals —
            our recipes bring health, happiness, and harmony to your table. Cook with love, eat with joy, and nourish your body the vegetarian way!"</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn transition-transform duration-300 md:px-4 px-6 py-2 text-white rounded-xl shadow-xl hover:scale-110">Check Out</button>
          </div>
         </div>

        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 "> 
         
           <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl shadow-xl transform rotate-[8deg] z-0 ">
            <img src={veg3} alt="page3" className="w-full h-full object-cover p-2" />
          </div>

          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-white shadow-xl transform rotate-[8deg] z-20">
            <img src={veg2} alt="page1" className="w-full h-full object-cover" />
          </div>
        </div>
     
      </div>


      {/* salad */}

      <div className='flex justify-evenly  flex-col md:flex-row mx-10 mt-5 slide-right fade-delay-5 shadow-xl rounded-3xl py-3'>
  
        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 ">
    
    
          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[-8deg] z-0">
            <img src={salad1} alt="page3" className="w-full h-full object-cover rounded-4xl" />
          </div>

    
          <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl bg-white shadow-xl transform rotate-[8deg] z-20 ">
            <img src={salad2} alt="page1" className="w-full h-full object-cover rounded-4xl" />
           </div>
          </div>
   

          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center bg-gradient-to-r via-yellow-100 py-3">
            <h1 className='\text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-10'>❝𝐬𝐚𝐥𝐚𝐝❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>“Dive into a bowl of freshness and crunch, Where every leaf, fruit, and nut comes alive with flavor.
            Our salads are a celebration of health, color, and pure delight-Nourish your body, energize your day, and savor the natural goodness in every bite!”</p>

          <div className="flex justify-center mt-6 md:mt-10">
            <button className="smooth-gradient-btn transition-transform duration-300 md:px-4 px-6 py-2 text-white rounded-xl shadow-xl hover:scale-110">Check Out</button>
            </div>
          </div>
     
      </div>


      {/* fastfood */}

      <div className='flex justify-evenly flex-col-reverse md:flex-row mx-10 mt-5 slide-right fade-delay-5 shadow-xl rounded-3xl py-3'>


          <div className="w-full md:w-1/2 flex flex-col  items-center md:justify-center justify-center bg-gradient-to-r via-orange-100 py-3">
            <h1 className='\text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-10'>❝𝐅𝐚𝐬𝐭-𝐅𝐨𝐨𝐝❞</h1>
            <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>“Craving something fast but full of flavor? Our fast food brings you crispy, juicy, and mouthwatering delights in every bite.
            From spicy kicks to cheesy goodness, We serve up satisfaction that fits your busy lifestyle — Because great taste should never wait!”</p>

          <div className="flex justify-center mt-6 md:mt-10 shadow-xl">
            <button className="smooth-gradient-btn transition-transform duration-300 md:px-4 px-6 py-2 text-white rounded-xl hover:scale-110">Check Out</button>
          </div>
         </div>

        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center mt-10 "> 
         
           <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-4xl shadow-xl transform rotate-[8deg] z-0 ">
            <img src={pic1} alt="page3" className="w-full h-full object-cover p-2 rounded-4xl" />
          </div>

          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-white shadow-xl transform rotate-[-8deg] z-20">
            <img src={pic2} alt="page1" className="w-full h-full object-cover rounded-4xl" />
          </div>
        </div>
     
      </div>

      <footer className='mt-16 py-4 bg-gradient-to-r from-green-100 via-green-200 to-green-300'>
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
            <p className="text-center md:text-left text-sm md:text-base">
            © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
            </p>
          </div>  
      </footer>


    </>  
  );
}

export default Explore;