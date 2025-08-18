import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../pages/gradient.css';
import logo from '../assets/logo.png';
import image1 from '../assets/image1.png';
import image7 from '../assets/image7.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';




function Home(){

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); 

    return(
     
      <>
      <div className="bg-[#0C104E]">

        <div className="min-h-screen w-full px-4 md:px-0">

      <nav className='flex items-center'>
        <img src={logo} alt="logo" className='w-16 h-16 md:ml-8 mt-2' />
        <h2 className='md:text-2xl text-lg font-bold ml-2 text-white'>𝑹𝒆𝒄𝒊𝒑𝒆 𝑱𝒖𝒏𝒄𝒕𝒊𝒐𝒏</h2>


        <div className="ml-auto md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>

        <ul className={`flex ml-auto pr-6  gap-3 md:gap-5 text-lg mr-10 absolute md:static top-20 right-4 transition-all duration-300
           md:flex md:top-auto md:right-auto ${isOpen ? "flex" : "hidden"}`}>
          <li className='hover:text-xl text-white'><a href="#">Home</a></li>
          <li className='hover:text-xl text-white'><Link to="/favorite">Favorite</Link></li>
          <li className='hover:text-xl text-white'><a href="#">About Us</a></li>
        </ul>
      </nav>

        <h1 className='text-center text-3xl md:text-[400%]  font-extrabold mt-20 slide-left fade-delay-4 text-white' >“Cook Up a Storm, <span className='text-green-500'>One Yummy Recipe at a Time!”</span></h1> 
        <p className='text-center text-lg md:text-[200%] font-light mt-10 px-4 md:px-0 max-w-3xl mx-auto slide-right fade-delay-5 text-white'>From sizzle to sprinkle, Every bite’s a joy to mingle,<br /> Bringing delicious moments to your table</p>

      <div className="flex justify-center mt-6 md:mt-10">
       <button className="smooth-gradient-btn transition-transform duration-300 text-xl md:text-3xl md:px-10 px-8 py-2 text-white rounded-xl hover:text-4xl font-bold" onClick={() => navigate("/explore")}>
        Explore Now
       </button>
      </div>  

       <div className='flex flex-wrap overflow-hidden gap-4 mt-24 w-full justify-center'>

        <img src={image1} alt="image1" className="w-1/4 h-auto sm:w-52 sm:h-52 object-cover fall-top "style={{ animationDelay: "0s" }}/>

        <div className=" w-1/4 h-auto sm:w-52 sm:h-52  object-cover">
        <img src={image7} alt="image7" className=" fall-top"style={{ animationDelay: "0.2s" }}/>
        </div>
        
        <div className="w-1/4 h-auto sm:w-52 sm:h-52  object-cover">
        <img src={image4} alt="image4" className="fall-top" style={{ animationDelay: "0.4s" }}/>
        </div>
    
        <img src={image5} alt="image5" className=" w-1/4 h-auto sm:w-52 sm:h-52  object-cover fall-top" style={{ animationDelay: "0.6s" }}/>

        <div className="w-1/2 h-auto sm:w-76 sm:h-52 object-cover">
        <img src={image6} alt="image6" className="fall-top" style={{ animationDelay: "0.8s" }}/>
        </div>

      </div>
    
      </div>
      </div>

    </>
    );
}

export default Home;