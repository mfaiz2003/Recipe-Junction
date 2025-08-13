import image2 from '../nonveg.img/image2.jpg';
import image5 from '../nonveg.img/image5.jpg';
import image6 from '../nonveg.img/image6.jpg';




function Nonveg(){
    return(

        <>
        <div>
            <h1 className='text-center'>Non-Veg Recipe</h1>
        </div>

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-10 md:px-10 flex-col md:flex-row">

            <div className='w-full md:w-96 h-full shadow-lg'>
                <h1 className='text-center'>Butter Chicken</h1>
                <img src={image2} alt="image2" className="w-full h-72 object-cover rounded-4xl mt-3"/>
                <p>hello my name is mohammad Faiz</p>
            </div>

            <div className='w-full md:w-96 h-full shadow-lg'>
                <h1 className='text-center'>Handi Chicken</h1>
                <img src={image5}  alt="image5" className="w-full h-72 object-cover rounded-t-4xl mt-3" />
                <p>hello my name is mohammad Faiz</p>
            </div>

            <div className='w-full md:w-96 h-full shadow-lg'>
                <h1 className='text-center'>Chicken Kaali Mirch</h1>
                <img src={image6}  alt="image6" className="w-full h-72 object-cover rounded-t-4xl mt-3" />
                <p>hello my name is mohammad Faiz</p>
            </div>

            <div className='w-full md:w-96 h-full shadow-lg'>
                <h1 className='text-center'>kadai Chicken</h1>
                <img src={image6}  alt="image6" className="w-full h-72 object-cover rounded-t-4xl mt-3" />
                <p>hello my name is mohammad Faiz</p>
            </div>

            <div className='w-full md:w-96 h-full shadow-lg'>
                <h1 className='text-center'>Chicken Kaali Mirch</h1>
                <img src={image6}  alt="image6" className="w-full h-72 object-cover rounded-t-4xl mt-3" />
                <p>hello my name is mohammad Faiz</p>
            </div>

        </div>
        </>
    )
}

export default Nonveg;