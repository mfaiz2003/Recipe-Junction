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
    
        <div className='w-1/2 flex justify-center bg-gradient-to-r from-violet-400 via-violet-300 to bg-violet-200 rounded-tr-full rounded-br-full mt-2 shadow-lg'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Non-Veg Gravy Recipe</h1>
        </div>

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">
            
            <div className='w-full md:w-96 h-full'>
                <img src={image2} alt="image2" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Butter Chicken</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={image5}  alt="image5" className="w-full h-72 object-cover rounded-4xl" />
                <h1 className='text-center text-xl'>Handi Chicken</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={image6}  alt="image6" className="w-full h-72 object-cover rounded-4xl" />
                <h1 className='text-center text-xl'>Chicken Kaali Mirch</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={image3}  alt="image6" className="w-full h-72 object-cover rounded-4xl"/>
                <h1 className='text-center text-xl'>kadai Chicken</h1>                
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={image9}  alt="image6" className="w-full h-72 object-cover rounded-4xl" />
                <h1 className='text-center text-xl'>Chicken Chilli</h1>
            </div>            
        </div>
        

        {/* section2 */}

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">
            <div className='w-full md:w-96 h-full'>
                <img src={image10} alt="image2" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Chicken Tikka Masala</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={image11} alt="image2" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Chicken Lababdar</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={mutton1} alt="mutton" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Mutton Stew</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={mutton2} alt="mutton2" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Mutton Rogan Josh</h1>
            </div>

            <div className='w-full md:w-96 h-full'>
                <img src={mutton3} alt="mutton3" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Mutton Korma</h1>
            </div>
        </div>
        
        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row mt-3">
            <div className='w-full h-full md:w-64'>
                <img src={mutton4} alt="mutton4" className="w-full h-72 object-cover rounded-4xl "/>
                <h1 className='text-center text-xl'>Mutton Bhuna Masala</h1>
            </div>
        </div>       

           </>

    )
}

export default Nonveg;