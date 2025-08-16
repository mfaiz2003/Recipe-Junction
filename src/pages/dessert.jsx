import gulabjamun from '../dessert/gulabjamun.jpeg';
import rasogulla1 from '../dessert/rasogulla1.jpg';
import halwa from '../dessert/halwa.jpg';
import jalebi from '../dessert/jalebi.jpg';
import barfi1 from '../dessert/barfi1.jpg';
import nariyalbarfi from '../dessert/nariyalbarfi.jpg';
import gajarhalwa from '../dessert/gajarhalwa.jpeg';
import rasmalai from '../dessert/rasmalai.jpg';
import seviyan from '../dessert/seviyan.jpg';
import laddo from '../dessert/laddo.jpg';





function Dessert(){
    return(

    <>
    
    <div className='bg-[#0C104E]'>
        
         <footer className='flex justify-center items-center w-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF69B4] sticky top-0 z-50'>
            <div className='px-10 py-2 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>𝐑𝐄𝐂𝐈𝐏𝐄</h1>
            </div>
        </footer>

        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Sweets</h1>
        </div>

         <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                            
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={gulabjamun} alt="gulabjamun" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐆𝐮𝐥𝐚𝐛 𝐉𝐚𝐦𝐮𝐧</h1>
                <p className='text-justify px-7 mt-2 '>Soft, golden dumplings made of khoya, soaked in cardamom and rose-flavored sugar syrup</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={rasogulla1}  alt="rasogulla" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐑𝐚𝐬𝐨𝐠𝐮𝐥𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Soft and spongy cottage cheese balls soaked in delicate sugar syrup from Bengal</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={halwa}  alt="halwa" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐇𝐚𝐥𝐰𝐚</h1>
                <p className='text-justify px-7 mt-2 '>A traditional sweet made with ghee, sugar, and milk, flavored with cardamom and topped</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={jalebi}  alt="jalebi" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐉𝐚𝐥𝐞𝐛𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Crispy, syrup-soaked spirals of sweetness — a timeless Indian favorite best served hot</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={barfi1}  alt="barfi1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐁𝐚𝐫𝐟𝐢</h1>
                <p className='text-justify px-7 mt-2 '>A rich milk-based sweet flavored with cardamom and garnished with nuts — simple, elegant, and festive</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>

        {/* section 2 */}
        

        
        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                            
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={nariyalbarfi} alt="nariyalbarfi" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐍𝐚𝐫𝐢𝐲𝐚𝐥 𝐁𝐚𝐫𝐟𝐢</h1>
                <p className='text-justify px-7 mt-2 '>A soft and chewy coconut fudge sweetened with milk and sugar, flavored with cardamom</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={gajarhalwa}  alt="gajarhalwa" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐆𝐚𝐣𝐚𝐫 𝐇𝐚𝐥𝐰𝐚</h1>
                <p className='text-justify px-7 mt-2 '>A traditional carrot pudding made with milk, ghee, and sugar, topped with nuts for a rich festive treat</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={laddo}  alt="laddo" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐋𝐚𝐝𝐝𝐨</h1>
                <p className='text-justify px-7 mt-2 '>Sweet round delights made with flour, ghee, and sugar — rich, aromatic, and loved in every celebration</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={rasmalai}  alt="rasmalai" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐑𝐚𝐬𝐦𝐚𝐥𝐚𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Soft paneer dumplings soaked in saffron and cardamom-flavored creamy milk, topped with nuts</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={seviyan}  alt="seviyan" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐒𝐞𝐯𝐢𝐲𝐚𝐧</h1>
                <p className='text-justify px-7 mt-2 '>A creamy vermicelli pudding cooked with milk, sugar, and cardamom, topped with dry fruits</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>
    
         <footer className='mt-16 py-3 bg-gradient-to-r from-green-100 via-green-200 to-green-300'>
            <div className="max-w-7xl mx-auto px-2 flex justify-center items-center">
              <p className="text-center md:text-left text-sm md:text-base">
              © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
              </p>
            </div>  
        </footer> 

     </div>

    </>    

    );
}

export default Dessert;