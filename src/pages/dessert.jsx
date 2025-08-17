import React, { useState, useEffect } from "react";
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


  const section1 = [
  { id: 1, name: "Gulab Jamun", description: "Soft, golden dumplings made of khoya, soaked in cardamom and rose-flavored sugar syrup", image: gulabjamun },
  { id: 2, name: "Rasogulla", description: "Soft and spongy cottage cheese balls soaked in delicate sugar syrup from Bengal", image: rasogulla1 },
  { id: 3, name: "Halwa", description: "A traditional sweet made with ghee, sugar, and milk, flavored with cardamom and topped", image: halwa },
  { id: 4, name: "Jalebi", description: "Crispy, syrup-soaked spirals of sweetness — a timeless Indian favorite best served hot", image: jalebi },
  { id: 5, name: "Barfi", description: "A rich milk-based sweet flavored with cardamom and garnished with nuts — simple, elegant, and festive", image: barfi1  }
  ];

  const section2 = [
  { id: 6, name: "Nariyal Barfi", description: "A soft and chewy coconut fudge sweetened with milk and sugar, flavored with cardamom", image: nariyalbarfi  },
  { id: 7, name: "Gajar Halwa", description: "A traditional carrot pudding made with milk, ghee, and sugar, topped with nuts for a rich festive treat", image:  gajarhalwa },
  { id: 8, name: "Rasmalai", description: "Soft paneer dumplings soaked in saffron and cardamom-flavored creamy milk, topped with nuts", image: rasmalai },
  { id: 9, name: "Seviyan", description: "A creamy vermicelli pudding cooked with milk, sugar, and cardamom, topped with dry fruit", image: seviyan  },
  { id: 10, name: "Laddo", description: "Sweet round delights made with flour, ghee, and sugar — rich, aromatic, and loved in every celebration", image: laddo }
  ];

function Dessert(){


    return(

    <>
    <div  className='bg-[#0C104E]'>
        
        <header className='flex justify-center items-center w-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF69B4] fixed top-0 z-50'>
            <div className='px-10 py-2 '>
                <h1 className='md:text-4xl text-2xl text-white font-bold tracking-[0.5em]'>𝐑𝐄𝐂𝐈𝐏𝐄</h1>
            </div>
        </header>


        <div className='w-2/5 mt-5 flex justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-tr-full rounded-br-full shadow-lg sticky top-20 z-50'>
            <h1 className='text-center font-bold text-2xl m-3 text-white'>Sweets</h1>
        </div>

        <div className="flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-20">
            
            {section1.map(section1 => ( 

            <div key={section1.id} className='w-full h-full min-h-[420px] md:w-1/5 bg-white rounded-4xl flex flex-col'> 
            <img src={section1.image} alt={section1.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-xl mt-2'>{section1.name}</h1>
            <p className='text-justify px-3 mt-2 flex-grow'>{section1.description}</p> 
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

        <div className=" flex justify-between w-full md:w-full gap-10 py-4 px-16 md:px-10 flex-col md:flex-row mt-3">

             {section2.map(section2 => ( 

            <div key={section2.id} className='w-full h-full min-h-[420px] md:w-1/5 bg-white rounded-4xl flex flex-col'> 
            <img src={section2.image} alt={section2.name} className="w-full h-52 object-cover rounded-t-4xl" />
            <h1 className='text-center text-xl mt-2'>{section2.name}</h1>
            <p className='text-justify px-3 mt-2'>{section2.description}</p> 
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

        <footer className='mt-16 py-3 bg-blue-800'>
            <div className="max-w-7xl mx-auto px-2 flex justify-center items-center">
              <p className="text-center md:text-left text-sm md:text-base text-white">
              © 2025 Recipe-Junction. Crafted with ❤️ by Mohammad Faiz
              </p>
            </div>  
        </footer> 

    </div> 
    </>    

    );
}

export default Dessert;