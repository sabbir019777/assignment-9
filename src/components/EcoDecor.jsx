
import decor1 from "../assets/21.png";
import decor2 from "../assets/22.png";
import decor3 from "../assets/23.png";
import decor4 from "../assets/24.png";
import decor5 from "../assets/25.png";
import decor6 from "../assets/26.png";

const ideas = [
  {
    id: 1,
    title: "Living Room Greenery",
    description:
      "Enhance your living room with a mix of indoor plants and decorative pots to create a cozy vibe.",
    image: decor1,
  },
  {
    id: 2,
    title: "Workspace Plants",
    description:
      "Place small succulents or air-purifying plants on your desk for a refreshing workspace.",
    image: decor2,
  },
  {
    id: 3,
    title: "Shelf Styling",
    description:
      "Use trailing plants on shelves to add life and a natural feel to your storage areas.",
    image: decor3,
  },
  {
    id: 4,
    title: "Bedroom Tranquility",
    description:
      "Introduce calming plants like Peace Lily or Snake Plant in your bedroom to improve air quality.",
    image: decor4,
  },
  {
    id: 5,
    title: "Bathroom Oasis",
    description:
      "Place moisture-loving plants in your bathroom to create a spa-like environment.",
    image: decor5,
  },
  {
    id: 6,
    title: "Balcony Garden",
    description:
      "Use hanging pots and small planters to convert your balcony into a green sanctuary.",
    image: decor6,
  },
];

export default function EcoDecor() {
  return (
 <section className="py-12 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 text-center">
   <h2 className="text-3xl font-bold text-white mb-8 hover:text-blue-400 transition-colors duration-300">
     Eco Decor Ideas </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     {ideas.map((idea) => (
     <div
    key={idea.id}
     className="bg-white rounded-lg shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"  >
  <img
    src={idea.image}
    alt={idea.title}
    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"  />
    <div className="p-4 text-left">
    <h3 className="text-xl font-semibold mb-2 text-black">{idea.title}</h3>
     <p className="text-gray-700 text-sm">{idea.description}</p>
    </div>
     </div>
    ))}
   </div>
 </div>
    </section>
  );
}
