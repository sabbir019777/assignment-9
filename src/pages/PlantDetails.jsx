import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import snakePlantImg from "../assets/2.png";
import aloeVeraImg from "../assets/5.png";
import fiddleLeafImg from "../assets/4.png";
import peaceLilyImg from "../assets/1.png";
import monsteraImg from "../assets/3.png";
import spiderPlantImg from "../assets/6.png";

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const data = [
      { plantId: 1, plantName: "Snake Plant", category: "Air Purifier", price: 18, rating: 4.8, availableStock: 10, careLevel: "Easy", description: "A hardy plant that purifies indoor air and thrives in low light.", image: snakePlantImg, providerName: "UrbanGreen Studio" },

      { plantId: 2, plantName: "Aloe Vera", category: "Air Purifier", price: 12, rating: 4.5, availableStock: 8, careLevel: "Easy", description: "A succulent plant known for its medicinal properties.", image: aloeVeraImg, providerName: "Succulent Studio" },

      { plantId: 3, plantName: "Fiddle Leaf Fig", category: "Decor", price: 35, rating: 4.5, availableStock: 7, careLevel: "Medium", description: "A popular indoor tree with large violin-shaped leaves.", image: fiddleLeafImg, providerName: "GreenHouse Co." },

      { plantId: 4, plantName: "Peace Lily", category: "Air Purifier", price: 20, rating: 4.6, availableStock: 12, careLevel: "Easy", description: "Beautiful white blooms and excellent at removing toxins.", image: peaceLilyImg, providerName: "UrbanGreen Studio" },

      { plantId: 5, plantName: "Monstera", category: "Decor", price: 28, rating: 4.7, availableStock: 5, careLevel: "Medium", description: "Large glossy leaves with natural splits, trendy plant for home decor.", image: monsteraImg, providerName: "Plantify" },

      { plantId: 6, plantName: "Spider Plant", category: "Air Purifier", price: 12, rating: 4.4, availableStock: 18, careLevel: "Easy", description: "Great air purifier, easy to grow, produces baby plantlets.", image: spiderPlantImg, providerName: "UrbanGreen Studio" },
    ];

    const p = data.find(pl => pl.plantId === parseInt(id));
    setPlant(p);
  }, [id]);

  if (!plant) return <p className="p-4 text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-lg max-w-md w-full text-white">
     <img
   src={plant.image}
    alt={plant.plantName}
       className="h-72 w-full object-cover rounded-xl mb-4 shadow-md" />

 <h2 className="text-3xl font-bold mb-2 text-center">{plant.plantName}</h2>
   <p className="text-gray-200 mb-3 text-center">{plant.description}</p>

   <div className="bg-white/10 p-3 rounded-lg mb-4 text-sm space-y-1">
     <p><strong>Category:</strong> {plant.category}</p>
  <p><strong>Price:</strong> ${plant.price}</p>
   <p><strong>Rating:</strong>  {plant.rating}</p>
      <p><strong>Stock:</strong> {plant.availableStock}</p>
     <p><strong>Care Level:</strong> {plant.careLevel}</p>
   <p><strong>Provider:</strong> {plant.providerName}</p>
    </div>

    <h3 className="text-xl font-semibold mt-4 mb-2 text-center text-gray-600-300">Book Consultation</h3>

 <form
    className="flex flex-col gap-3"
     onSubmit={(e) => {
    e.preventDefault();
  alert("✅ Successfully Booked!");
      e.target.reset();
     }}
   >
   <input
    type="text"
      placeholder="Your Name"
    className="p-2 rounded bg-white/20 border border-white/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
     required
   />
   <input
     type="email"
    placeholder="Your Email"
    className="p-2 rounded bg-white/20 border border-white/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
     required
    />
  <button
      type="submit"
      className="bg-gradient-to-r from-green-400 to-lime-500 text-gray-900 font-semibold py-2 rounded hover:opacity-70 transition"
       >   Book Now  </button>
   </form>
    </div>
  </div>
  );
}
