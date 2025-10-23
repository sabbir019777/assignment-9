import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="bg-gray-500 text-white border p-4 rounded shadow 
   hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
    <img
    src={plant.image}
    alt={plant.plantName}
    className="h-60 w-full object-cover rounded"
      />
   <h3 className="font-bold mt-3 text-lg">{plant.plantName}</h3>
  <p className="text-green-400 font-semibold">${plant.price}</p>
   <p className="text-yellow-300">Rating: {plant.rating}</p>
   <Link
     to={`/plants/${plant.plantId}`}
     className="text-white mt-2 inline-block hover:text-red-800"  > View Details </Link>
</div>
  );
}
