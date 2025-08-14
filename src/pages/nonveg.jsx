import '../pages/gradient.css';
import image2 from '../nonveg.img/image2.jpg';
import image5 from '../nonveg.img/image5.jpg';
import image6 from '../nonveg.img/image6.jpg';
import image3 from '../nonveg.img/image3.jpg';
import image7 from '../nonveg.img/image7.jpg';
import image9 from '../nonveg.img/image9.jpg';
import image10 from '../nonveg.img/image10.jpeg';
import image11 from '../nonveg.img/image11.jpg';
import mutton1 from '../nonveg.img/mutton1.jpg';
import mutton2 from '../nonveg.img/mutton2.jpg';
import mutton3 from '../nonveg.img/mutton3.jpg';
import mutton4 from '../nonveg.img/mutton4.jpg';




function Nonveg(){
    return(
       
        
    <>
    <div className=' pt-[footer-height]'>

        
        <footer className='w-full h-12 flex justify-center items-center mt-3'>
            <div className='flex justify-center items-center md:px-18 px-4 py-2 rounded-4xl smooth-gradient-btn transition-transform duration-300 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>𝐑𝐄𝐂𝐈𝐏𝐄</h1>
            </div>
        </footer>

        <div className='w-1/2 mt-5 flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-violet-300 rounded-tr-full rounded-br-full shadow-lg sticky top-10 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Non-Veg Gravy Recipe</h1>
        </div>

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">
            
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image2} alt="image2" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐁𝐮𝐭𝐭𝐞𝐫 𝐂𝐡𝐢𝐜𝐤𝐞𝐧 </h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image5}  alt="image5" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐇𝐚𝐧𝐝𝐢 𝐂𝐡𝐢𝐜𝐤𝐞𝐧</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image6}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐊𝐚𝐚𝐥𝐢 𝐌𝐢𝐫𝐜𝐡</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image3}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐤𝐚𝐝𝐚𝐢 </h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadai</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>                
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image9}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐂𝐡𝐢𝐥𝐥𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button> 
            </div>            
        </div>
        

        {/* section2 */}

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image10} alt="image2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐓𝐢𝐤𝐤𝐚 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Grilled chicken tikka pieces simmered in a creamy, spiced tomato sauce for a rich and flavorful delight</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={image11} alt="image2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐋𝐚𝐛𝐚𝐛𝐝𝐚𝐚𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a creamy, buttery tomato-onion gravy with aromatic spices for a royal, rich flavor</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={mutton1} alt="mutton" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐒𝐭𝐞𝐰</h1>
                <p className='text-justify px-7 mt-2 '>Slow-cooked mutton with vegetables and aromatic spices in a hearty, flavorful broth</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>

            <div className='w-full md:w-96 h-full flex flex-col  items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={mutton2} alt="mutton2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐑𝐨𝐠𝐚𝐧 𝐉𝐨𝐬𝐡</h1>
                <p className='text-justify px-7 mt-2 '>Tender mutton pieces simmered in a rich, aromatic, and spicy Kashmiri-style curry</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={mutton3} alt="mutton3" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐊𝐨𝐫𝐦𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Succulent mutton slow-cooked in a creamy, nutty, and aromatic korma gravy for a royal flavor.</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>

        </div>
        
        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">
            <div className='w-full h-full md:w-64 flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white sticky top-0 z-0'>
                <img src={mutton4} alt="mutton4" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐁𝐡𝐮𝐧𝐚 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Tender mutton pieces cooked on high heat with onions, tomatoes, and spices to create a thick</p>
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
            </div>
        </div>       

    </div>


        <div className='w-1/2 flex justify-center bg-gradient-to-r from-violet-400 via-violet-300 to bg-violet-200 rounded-tr-full rounded-br-full shadow-lg'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Non-Veg Gravy Recipe</h1>
        </div>
     
           </>

    )
}

export default Nonveg;