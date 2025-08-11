import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';




function Home(){

    const navigate = useNavigate();

    return(

        <div className="min-h-screen w-full px-4 md:px-0">

      <nav className='flex items-center'>
        <img src={logo} alt="logo" className='w-16 h-16 md:ml-8 mt-2' />
        <h2 className='md:text-2xl text-lg font-bold ml-2 text-green-500'>𝑹𝒆𝒄𝒊𝒑𝒆 𝑱𝒖𝒏𝒄𝒕𝒊𝒐𝒏</h2>

        <ul className="flex ml-auto pr-6  gap-3 md:gap-5 p-2 text-l  mr-10 rounded-xl bg-green-500">
          <li className='hover:text-xl'><a href="#">Home</a></li>
          <li className='hover:text-xl'><a href="#">Favorites</a></li>
          <li className='hover:text-xl'><a href="#">About Us</a></li>
        </ul>
      </nav>

        <h1 className='text-center text-3xl md:text-5xl font-extrabold mt-20'>“Cook Up a Storm, <span className='text-green-500'>One Yummy Recipe at a Time!”</span></h1> 
        <p className='text-center text-lg md:text-3xl font-light mt-10 px-4 md:px-0 max-w-3xl mx-auto'>From sizzle to sprinkle, Every bite’s a joy to mingle,<br /> Bringing delicious moments to your table</p>

      <div className="flex justify-center mt-6 md:mt-10">
       <button className="md:px-10 px-8 py-2 bg-green-500 text-white rounded-xl hover:text-xl font-bold" onClick={() => navigate("/explore")}>
        Explore Now
       </button>
      </div>
      

      <div className='flex flex-wrap overflow-hidden gap-4 mt-24 justify-center'>
        <img src={image1} alt="image1" className="w-1/4 h-auto sm:w-52 sm:h-52 object-cover" />
        <img src={image2} alt="image2" className="w-1/4 h-auto sm:w-52 sm:h-52  object-cover" />
        <img src={image4} alt="image4" className="w-1/4 h-auto sm:w-52 sm:h-52  object-cover" />
        <img src={image5} alt="image5" className="w-1/4 h-auto sm:w-52 sm:h-52  object-cover" />
        <img src={image6} alt="image6" className="w-1/2 h-auto sm:w-96 sm:h-52  object-cover" />
    </div>      

  </div>


    );
}

export default Home;