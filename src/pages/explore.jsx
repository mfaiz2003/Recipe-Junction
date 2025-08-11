import image1 from '../nonveg.img/image1.png';
import image4 from '../nonveg.img/image4.png';


function Explore() {
  return (

    <div>
      <div className='flex justify-evenly m-10 flex-col md:flex-row'>
  
        <div className="relative w-full md:w-[500px] h-[350px] flex justify-center ">
    
    
          <div className="absolute top-0 left-0 md:left-[-20px] w-[250px] md:w-[350px] h-[250px] md:h-[350px]  bg-white shadow-xl transform rotate-[-8deg] z-0">
            <img src={image1} alt="page3" className="w-full h-full object-cover" />
           </div>

    
          <div className="absolute top-0 left-20 md:left-44 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-white shadow-xl transform rotate-[8deg] z-20 ">
            <img src={image4} alt="page1" className="w-full h-full object-cover" />
           </div>
        </div>
   

       <div className="w-full md:w-1/2 flex flex-col  items-center md:items-startjustify-center">
        <h1 className='\text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-10'>✌𝓝𝓸𝓷-𝓥𝓮𝓰✌</h1>
        <p className='flex mt-4 sm:mt-6 px-4 sm:px-6 font-light text-justify  text-base sm:text-lg md:text-xl'>"A flavorful delight for meat lovers — tender, juicy chicken slow-cooked with aromatic spices,
        fresh herbs, and a rich blend of sauces. Perfectly balanced to give every bite a burst of taste that will leave you wanting more."</p>

        <div className="flex justify-center mt-6 md:mt-10">
       <button className="md:px-4 px-6 py-2 bg-green-500 text-white rounded-xl">Check Out</button>
      </div>
       </div>


      </div>
    </div>
  );
}

export default Explore;