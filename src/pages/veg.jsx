import paneer1 from '../veg.img/paneer1.jpg';
import paneer2 from '../veg.img/paneer2.jpg';
import paneer3 from '../veg.img/paneer3.jpg';
import paneer4 from '../veg.img/paneer4.jpg';
import paneer5 from '../veg.img/paneer5.jpg';
import paneer6 from '../veg.img/paneer6.jpg';
import paneer7 from '../veg.img/paneer7.jpg';
import paneer8 from '../veg.img/paneer8.jpg';
import aloogobi1 from '../veg.img/aloogobi1.jpg';
import aloomatar1 from '../veg.img/aloomatar1.jpg';
import dumaloo1 from '../veg.img/dumaloo1.jpg';
import mixveg1 from '../veg.img/mixveg1.jpeg';
import bhindimasala1 from '../veg.img/bhindimasala1.jpg';
import baiganbharta1 from '../veg.img/baiganbharta1.jpg';
import mashroom1 from '../veg.img/mashroom1.jpg';
import aloojeera1 from '../veg.img/aloojeera1.jpg';

function Veg(){
    return(

      <>
      
    <div className='bg-[#0C104E]'>

        <footer className='flex justify-center items-center w-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF69B4] sticky top-0 z-50'>
            <div className='px-10 py-2 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>𝐑𝐄𝐂𝐈𝐏𝐄</h1>
            </div>
        </footer>

        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Paneer Item</h1>
        </div>

         {/*    paneer section */}
        
        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                    
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={paneer1} alt="paneer1" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐬𝐡𝐚𝐡𝐢 𝐏𝐚𝐧𝐞𝐞𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={paneer2}  alt="paneer2" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐊𝐚𝐝𝐡𝐚𝐢 𝐏𝐚𝐧𝐞𝐞𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={paneer3}  alt="paneer3" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐌𝐚𝐭𝐚𝐫 𝐏𝐚𝐧𝐞𝐞𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={paneer4}  alt="paneer4" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐏𝐚𝐧𝐞𝐞𝐫 𝐁𝐮𝐭𝐭𝐞𝐫 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadai</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={paneer5}  alt="paneer5" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐏𝐚𝐧𝐞𝐞𝐫 𝐓𝐢𝐤𝐤𝐚 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>

        {/* section2 */}
        
         <div className="flex justify-between w-full md:w-3/5 gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                    
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={paneer6} alt="paneer6" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐏𝐚𝐧𝐞𝐞𝐫 𝐋𝐚𝐛𝐚𝐛𝐝𝐚𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={paneer7}  alt="paneer4" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐏𝐚𝐥𝐚𝐤 𝐏𝐚𝐧𝐞𝐞𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadai</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={paneer8}  alt="paneer8" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐏𝐚𝐧𝐞𝐞𝐫 𝐁𝐡𝐮𝐫𝐣𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>


        {/* veg section */}
        
        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Veg Item</h1>
        </div>

         <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                    
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={aloogobi1} alt="aloogobi1" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐀𝐥𝐨𝐨 𝐆𝐨𝐛𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={aloomatar1}  alt="aloomatar1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐌𝐚𝐭𝐚𝐫 𝐀𝐥𝐨𝐨</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={dumaloo1}  alt="dumaloo1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐃𝐮𝐦 𝐀𝐥𝐨𝐨</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={mixveg1}  alt="mixveg1" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐌𝐢𝐱 𝐕𝐞𝐠</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadai</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={bhindimasala1}  alt="bhindimasala1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐁𝐡𝐢𝐧𝐝𝐢 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>

        {/* section 2 */}

        <div className="flex justify-between w-full md:w-3/5 gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
                    
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={baiganbharta1} alt="baiganbharta1" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐁𝐚𝐢𝐧𝐠𝐚𝐧 𝐁𝐡𝐚𝐫𝐭𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={mashroom1}  alt="mashroom1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐌𝐮𝐬𝐡𝐫𝐨𝐨𝐦 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>
        
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={aloojeera1}  alt="aloojeera1" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐀𝐥𝐨𝐨 𝐉𝐞𝐞𝐫𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick</p>
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

export default Veg;