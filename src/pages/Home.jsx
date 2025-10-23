import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

import snakePlantImg from "../assets/2.png";
import aloeVeraImg from "../assets/5.png";
import fiddleLeafImg from "../assets/4.png";
import peaceLilyImg from "../assets/1.png";
import monsteraImg from "../assets/3.png";
import spiderPlantImg from "../assets/6.png";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
 const data = [
   {
        plantId: 1,
        plantName: "Snake Plant",
        category: "Air Purifier",
        price: 18,
        rating: 4.8,
        availableStock: 10,
        careLevel: "Easy",
        description:
          "A hardy plant that purifies indoor air and thrives in low light.",
        image: snakePlantImg,
      },
      {
        plantId: 2,
        plantName: "Aloe Vera",
        category: "Air Purifier",
        price: 12,
        rating: 4.5,
        availableStock: 8,
        careLevel: "Easy",
        description: "A succulent plant known for its medicinal properties.",
        image: aloeVeraImg,
      },
      {
        plantId: 3,
        plantName: "Fiddle Leaf Fig",
        category: "Decor",
        price: 35,
        rating: 4.5,
        availableStock: 7,
        careLevel: "Medium",
        description:
          "A popular indoor tree with large violin-shaped leaves.",
        image: fiddleLeafImg,
      },
      {
        plantId: 4,
        plantName: "Peace Lily",
        category: "Air Purifier",
        price: 20,
        rating: 4.6,
        availableStock: 12,
        careLevel: "Easy",
        description:
          "Beautiful white blooms and excellent at removing toxins.",
        image: peaceLilyImg,
      },
      {
        plantId: 5,
        plantName: "Monstera",
        category: "Decor",
        price: 28,
        rating: 4.7,
        availableStock: 5,
        careLevel: "Medium",
        description:
          "Large glossy leaves with natural splits, trendy plant for home decor.",
        image: monsteraImg,
      },
      {
        plantId: 6,
        plantName: "Spider Plant",
        category: "Air Purifier",
        price: 12,
        rating: 4.4,
        availableStock: 18,
        careLevel: "Easy",
        description:
          "Great air purifier, easy to grow, produces baby plantlets.",
        image: spiderPlantImg,
      },
    ];

    setPlants(data);
  }, []);

  return (
  <div className="p-4 bg-gray-700 min-h-screen">
  <h1 className="text-3xl font-bold mb-8 text-center hover:text-blue-400">  Top Rated Indoor Plants </h1>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {plants.map((plant) => (
    <PlantCard key={plant.plantId} plant={plant} />
    ))}
  </div>
  </div>
  );
}
