import '../pages/gradient.css';
import mutton1 from '../nonveg.img/mutton1.jpg';
import mutton2 from '../nonveg.img/mutton2.jpg';
import mutton3 from '../nonveg.img/mutton3.jpg';
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
import image18 from '../nonveg.img/image18.jpg';
import image19 from '../nonveg.img/image19.jpeg';
import image20 from '../nonveg.img/image20.jpg';

const gravy = [
    { id: 1, name: "Butter Chicken", description:"Tender chicken cooked in a rich, creamy tomato-butter sauce with aromatic spices for a melt-in-your-mouth", image: image2 },
    { id: 2, name: "Handi Chicken", description: "Succulent chicken slow-cooked in a traditional clay handi with creamy spices and a rich, aromatic gravy", image: image5 },
    { id: 3, name: "Chicken kaali Mirch", description:"Juicy chicken pieces tossed in a bold, peppery black pepper sauce for a fiery, flavorful kick", image: image6 },
    { id: 4, name: "Chicken Kadhai", description:"Tender chicken cooked with fresh tomatoes, bell peppers, and aromatic spices in a sizzling kadhai", image: image3 },
    { id: 5, name: "Chicken Chilli", description:"Spicy, crispy, and packed with flavor Chilli Chicken that makes every bite irresistible", image: image9 }
];

const gravy2 = [
    { id: 1, name: "Chicken Tikka Masala", description:"Grilled chicken tikka pieces simmered in a creamy, spiced tomato sauce for a rich and flavorful delight", image: image10 },
    { id: 2, name: "Chicken Lababdar", description:"Tender chicken cooked in a creamy, buttery tomato-onion gravy with aromatic spices for a royal, rich flavor", image: image11 },
    { id: 3, name: "Mutton Stew", description:"Slow-cooked mutton with vegetables and aromatic spices in a hearty, flavorful broth", image: mutton1 },
    { id: 4, name: "Mutton Rogan Josh", description:"Tender mutton pieces simmered in a rich, aromatic, and spicy Kashmiri-style curry", image: mutton2 },
    { id: 5, name: "Mutton Korma", description:"Succulent mutton slow-cooked in a creamy, nutty, and aromatic korma gravy for a royal flavor", image: mutton3 }
];

const fried = [
    { id: 1, name: "Chicken Fry", description:"Juicy chicken pieces, perfectly marinated and fried till golden crisp", image: image8 },
    { id: 2, name: "Chicken Roasted", description:"Tender chicken marinated in spices and slow-roasted for a smoky, flavorful delight", image: image12 },
    { id: 3, name: "Chicken Tikka", description:"Succulent chicken cubes marinated in aromatic spices and grilled to perfection", image: image13 },
    { id: 4, name: "Chicken Seekh Kabab", description:"Minced chicken blended with spices, skewered, and grilled for a smoky, juicy flavor", image: image14 },
    { id: 5, name: "Chicken Shaami Kabab", description:"Soft and flavorful chicken mince patties infused with spices, shallow-fried to perfection", image: image15 }
];

const fried2 = [
    { id: 1, name: "Mutton Seekh Kabab", description:"Soft and flavorful Mutton mince patties infused with spices, shallow-fried to perfection", image: image16 },
    { id: 3, name: "Chicken Lollipop", description:"Frenched chicken wings marinated in spices, deep-fried, and served with tangy sauce", image: image20 }
];

const biryani =[
    { id: 1, name: "Chicken Biryani", description:"Flavorful basmati rice cooked with succulent chicken pieces and a blend of aromatic spices", image: image18 },
    { id: 2, name: "Mutton Biryani", description:"Fragrant basmati rice layered with tender mutton pieces, slow-cooked in aromatic spices", image: image19 }
]



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
        

        {/* gravy section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4 px-16 md:px-10 mt-14">
            
            {gravy.map(gravy => ( 

            <div key={gravy.id} className=' h-full min-h-[450px] bg-white rounded-4xl flex flex-col'> 
            <img src={gravy.image} alt={gravy.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-2xl font-bold mt-2'>{gravy.name}</h1>
            <p className='text-justify px-3 mt-2 md:text-xl text-lg '>{gravy.description}</p> 
            <div className='flex justify-between px-4 mt-auto mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'> View Recipe </button>
            <button className='p-2 rounded-full bg-blue-800 hover:scale-110' >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /> </svg>
            </button>
            </div>
            </div>
            ))}
        </div>


        {/* section2 */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4 px-16 md:px-10">
            
            {gravy2.map(gravy2 => ( 

            <div key={gravy2.id} className='h-full min-h-[450px] bg-white rounded-4xl flex flex-col'> 
            <img src={gravy2.image} alt={gravy2.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-2xl font-bold mt-2'>{gravy2.name}</h1>
            <p className='text-justify px-3 mt-2 md:text-xl text-lg '>{gravy2.description}</p> 
            <div className='flex justify-between px-4 mt-auto mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'> View Recipe </button>
            <button className='p-2 rounded-full bg-blue-800 hover:scale-110' >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /> </svg>
            </button>
            </div>
            </div>
            ))}
        </div>


        {/* Fried section */}

        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Fried Item</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4 px-16 md:px-10 mt-14">
            
            {fried.map(fried => ( 

            <div key={fried.id} className='h-full min-h-[450px] bg-white rounded-4xl flex flex-col'> 
            <img src={fried.image} alt={fried.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-2xl font-bold mt-2'>{fried.name}</h1>
            <p className='text-justify px-3 mt-2 md:text-xl text-lg '>{fried.description}</p> 
            <div className='flex justify-between px-4 mt-auto mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'> View Recipe </button>
            <button className='p-2 rounded-full bg-blue-800 hover:scale-110' >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /> </svg>
            </button>
            </div>
            </div>
            ))}
        </div>


        {/* section 2 */}

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4 px-16 md:px-10">
            
            {fried2.map(fried2 => ( 

            <div key={fried2.id} className='h-full min-h-[450px] bg-white rounded-4xl flex flex-col'> 
            <img src={fried2.image} alt={fried2.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-2xl font-bold mt-2'>{fried2.name}</h1>
            <p className='text-justify px-3 mt-2 md:text-xl text-lg '>{fried2.description}</p> 
            <div className='flex justify-between px-4 mt-auto mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'> View Recipe </button>
            <button className='p-2 rounded-full bg-blue-800 hover:scale-110' >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /> </svg>
            </button>
            </div>
            </div>
            ))}
        </div>

       

        {/* Biryani */}

        
        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>𝐁𝐢𝐫𝐲𝐚𝐧𝐢</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4 px-16 md:px-10 mt-14">
            
            {biryani.map(biryani => ( 

            <div key={biryani.id} className='h-full min-h-[450px] bg-white rounded-4xl flex flex-col'> 
            <img src={biryani.image} alt={biryani.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-2xl font-bold mt-2'>{biryani.name}</h1>
            <p className='text-justify px-3 mt-2 md:text-xl text-lg'>{biryani.description}</p> 
            <div className='flex justify-between px-4 mt-auto mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'> View Recipe </button>
            <button className='p-2 rounded-full bg-blue-800 hover:scale-110' >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /> </svg>
            </button>
            </div>
            </div>
            ))}
        </div>
        

        <footer className='mt-5 py-3 bg-blue-800'>
          <div className="max-w-7xl mx-auto px-2 flex justify-center items-center">
            <p className="text-center md:text-left text-sm md:text-xl text-white">
            © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
            </p>
          </div>  
        </footer>  

    </div>


         



     
           </>

    )
}

export default Nonveg;