import { useState, useEffect } from "react";

import gulabjamun from "../dessert/gulabjamun.jpeg";
import rasogulla1 from "../dessert/rasogulla1.jpg";
import Halwa from "../dessert/halwa.jpg";
import jalebi from "../dessert/jalebi.jpg";
import barfi1 from "../dessert/barfi1.jpg";

const recipesData = [
  { id: 1, name: "Gulab Jamun", description: "Soft, golden dumplings made of khoya...", image: gulabjamun },
  { id: 2, name: "Rasogulla", description: "Soft and spongy cottage cheese balls soaked in sugar syrup...", image: rasogulla1 },
  { id: 3, name: "Halwa", description: "A traditional sweet made with ghee, sugar, and milk, flavored...", image: Halwa },
  { id: 4, name: "Jalebi", description: "Crispy, syrup-soaked spirals of sweetness — a timeless Indian favorite...", image: jalebi },
  { id: 5, name: "Barfi", description: "A rich milk-based sweet flavored with cardamom and garnished with nuts...", image: barfi1 }
];

function Dessert() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const handleSave = (recipe) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some(item => item.id === recipe.id)) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${recipe.name} added to Favorites!`);
    } else {
      alert("Already in Favorites!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {recipes.map(recipe => (
        <div key={recipe.id} className='w-full h-full md:w-96'>
          {/* image */}
          <img 
            src={recipe.image}  
            alt={recipe.name} 
            className="w-full h-72 object-cover rounded-t-4xl"
          />

          {/* title */}
          <h1 className='text-center text-xl mt-2'>{recipe.name}</h1>

          {/* description */}
          <p className='text-justify px-3 mt-2'>{recipe.description}</p>

          {/* buttons */}
          <div className='flex justify-between px-4 mt-4 mb-5'>
            <button className='rounded-2xl bg-orange-400 px-5 py-1 text-white hover:scale-110'>
              View Recipe
            </button>
            <button 
              onClick={() => handleSave(recipe)} 
              className='p-2 rounded-full bg-blue-800 hover:scale-110'
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-6 w-6 text-white" 
                   fill="currentColor" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dessert;
