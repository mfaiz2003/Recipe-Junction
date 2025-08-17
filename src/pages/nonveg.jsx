import '../pages/gradient.css';
import mutton1 from '../nonveg.img/mutton1.jpg';
import mutton2 from '../nonveg.img/mutton2.jpg';
import mutton3 from '../nonveg.img/mutton3.jpg';
import mutton4 from '../nonveg.img/mutton4.jpg';
import image2 from '../nonveg.img/image2.jpg';
import image5 from '../nonveg.img/image5.jpg';
import image6 from '../nonveg.img/image6.jpg';
import image3 from '../nonveg.img/image3.jpg';
import image8 from '../nonveg.img/image8.jpg';
import image9 from '../nonveg.img/image9.jpg';
import image10 from '../nonveg.img/image10.jpeg';
import image11 from '../nonveg.img/image11.jpg';
import image12 from '../nonveg.img/image12.jpeg';
import image13 from '../nonveg.img/image13.jpg';
import image14 from '../nonveg.img/image14.jpg';
import image15 from '../nonveg.img/image15.jpg';
import image16 from '../nonveg.img/image16.jpg';
import image17 from '../nonveg.img/image17.jpg';
import image18 from '../nonveg.img/image18.jpg';
import image19 from '../nonveg.img/image19.jpeg';
import image20 from '../nonveg.img/image20.jpg';





function Nonveg(){
    return(
       
        
    <>
    <div className='bg-[#0C104E]'>

        <footer className='flex justify-center items-center w-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF69B4] sticky top-0 z-50'>
            <div className='px-10 py-2 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>𝐑𝐄𝐂𝐈𝐏𝐄</h1>
            </div>
        </footer>

        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-red-400 via-orange-500 to-red-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Gravy Item</h1>
        </div>

        {/*     nonveg gravy section */}

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
            
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={image2} alt="image2" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐁𝐮𝐭𝐭𝐞𝐫 𝐂𝐡𝐢𝐜𝐤𝐞𝐧 </h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={image5}  alt="image5" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐇𝐚𝐧𝐝𝐢 𝐂𝐡𝐢𝐜𝐤𝐞𝐧</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white sticky'>
                <img src={image6}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐊𝐚𝐚𝐥𝐢 𝐌𝐢𝐫𝐜𝐡</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white '>
                <img src={image3}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐤𝐚𝐝𝐚𝐢 </h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadai</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white sticky'>
                <img src={image9}  alt="image6" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐂𝐡𝐢𝐥𝐥𝐢</h1>
                <p className='text-justify px-7 mt-2 '>Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div>            
        </div>
        

        {/* section2 */}

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={image10} alt="image2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐓𝐢𝐤𝐤𝐚 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Grilled chicken tikka pieces simmered in a creamy, spiced tomato sauce for a rich and flavorful delight</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={image11} alt="image2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐋𝐚𝐛𝐚𝐛𝐝𝐚𝐚𝐫</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken cooked in a creamy, buttery tomato-onion gravy with aromatic spices for a royal, rich flavor</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={mutton1} alt="mutton" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐒𝐭𝐞𝐰</h1>
                <p className='text-justify px-7 mt-2 '>Slow-cooked mutton with vegetables and aromatic spices in a hearty, flavorful broth</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col  items-center rounded-4xl bg-white'>
                <img src={mutton2} alt="mutton2" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐑𝐨𝐠𝐚𝐧 𝐉𝐨𝐬𝐡</h1>
                <p className='text-justify px-7 mt-2 '>Tender mutton pieces simmered in a rich, aromatic, and spicy Kashmiri-style curry</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl bg-white'>
                <img src={mutton3} alt="mutton3" className="w-full h-52 object-cover rounded-t-4xl "/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐊𝐨𝐫𝐦𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Succulent mutton slow-cooked in a creamy, nutty, and aromatic korma gravy for a royal flavor.</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

        </div>
        
        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
            <div className='w-full h-full md:w-64 flex flex-col items-center rounded-4xl bg-white'>
                <img src={mutton4} alt="mutton4" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-xl'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐁𝐡𝐮𝐧𝐚 𝐌𝐚𝐬𝐚𝐥𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Tender mutton pieces cooked on high heat with onions, tomatoes, and spices to create a thick</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>
        </div> 


        {/* Fried section */}

        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Fried Item</h1>
        </div>


        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image8} alt="image8" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2 py-3 '>𝐜𝐡𝐢𝐜𝐤𝐞𝐧 𝐅𝐫𝐲</h1>
                <p className='text-justify px-7 mt-2 '>Juicy chicken pieces, perfectly marinated and fried till golden crisp</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image12}  alt="image12" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2 py-3'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐑𝐨𝐚𝐬𝐭𝐞𝐝</h1>
                <p className='text-justify px-7 mt-2 '>Tender chicken marinated in spices and slow-roasted for a smoky, flavorful delight</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image13}  alt="image13" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐓𝐢𝐤𝐤𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Succulent chicken cubes marinated in aromatic spices and grilled to perfection</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image14}  alt="image14" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐒𝐞𝐞𝐤𝐡 𝐤𝐚𝐛𝐚𝐛</h1>
                <p className='text-justify px-7 mt-2 '>Minced chicken blended with spices, skewered, and grilled for a smoky, juicy flavor</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>                 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image15}  alt="image15" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐒𝐚𝐚𝐦𝐢 𝐤𝐚𝐛𝐚𝐛</h1>
                <p className='text-justify px-7 mt-2 '>Soft and flavorful chicken mince patties infused with spices, shallow-fried to perfection</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div> 

        </div>


        {/* section 2 */}

        <div className="flex justify-between w-full md:w-3/5 gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
            
            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image16}  alt="image16" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐒𝐞𝐞𝐤𝐡 𝐊𝐚𝐛𝐚𝐛</h1>
                <p className='text-justify px-7 mt-2 '>Soft and flavorful Mutton mince patties infused with spices, shallow-fried to perfection</p>
                
                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div> 
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image17}  alt="image17" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐂𝐡𝐚𝐫𝐬𝐢 𝐓𝐢𝐤𝐤𝐚</h1>
                <p className='text-justify px-7 mt-2 '>Juicy mutton chunks seasoned with salt and spices, grilled for a rich, smoky taste</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>                 
            </div>

             <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image20}  alt="image20" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐋𝐨𝐥𝐥𝐢𝐩𝐨𝐩</h1>
                <p className='text-justify px-7 mt-2 '>Frenched chicken wings marinated in spices, deep-fried, and served with tangy sauce</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>                 
            </div>
            
        </div> 

          {/* Biryani */}

        
        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>𝐁𝐢𝐫𝐲𝐚𝐧𝐢</h1>
        </div>

        <div className="flex justify-between w-full md:w-2/5 gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">
             <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image18}  alt="image16" className="w-full h-52 object-cover rounded-t-4xl" />
                <h1 className='text-center text-2xl mt-2'>𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐁𝐫𝐢𝐲𝐚𝐧𝐢 </h1>
                <p className='text-justify px-7 mt-2 '>Flavorful basmati rice cooked with succulent chicken pieces and a blend of aromatic spices</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>  
            </div>

            <div className='w-full md:w-96 h-full flex flex-col items-center rounded-4xl shadow-xl hover:shadow-2xl bg-white'>
                <img src={image19}  alt="image17" className="w-full h-52 object-cover rounded-t-4xl"/>
                <h1 className='text-center text-2xl mt-2'>𝐌𝐮𝐭𝐭𝐨𝐧 𝐁𝐫𝐢𝐲𝐚𝐧𝐢 </h1>
                <p className='text-justify px-7 mt-2 '>Fragrant basmati rice layered with tender mutton pieces, slow-cooked in aromatic spices</p>

                <div className="w-full flex justify-between mt-2 mb-3 px-7">
                <button className='mt-2 rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110 mb-3'>View Recipe</button>
                <button onClick={() => handleSave(recipe)} className='mt-2 mb-3 p-2 rounded-full bg-blue-800 hover:scale-110 transition-transform'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                </button> 
                </div>                 
            </div>
        </div> 

        <footer className='mt-16 py-3 bg-blue-800'>
          <div className="max-w-7xl mx-auto px-2 flex justify-center items-center">
            <p className="text-center md:text-left text-sm md:text-base text-white">
            © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
            </p>
          </div>  
        </footer>  

    </div>


         



     
           </>

    )
}

export default Nonveg;