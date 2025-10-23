
import expert1 from "../assets/10.png";
import expert2 from "../assets/55.JPG";
import expert3 from "../assets/12.png";
import expert4 from "../assets/13.png";
import expert5 from "../assets/14.png";
import expert6 from "../assets/11.png";

const experts = [
  { id: 1, name: "Alice Green", specialization: "Succulents & Cacti Expert", image: expert1 },

  { id: 2, name: "Sabbir Ahmad", specialization: "Indoor Plants Specialist", image: expert2 },

  { id: 3, name: "Carol Leaf", specialization: "Air-Purifying Plants Expert", image: expert3 },

  { id: 4, name: "David Root", specialization: "Decor & Landscaping", image: expert4 },

  { id: 5, name: "Eve Sprout", specialization: "Tropical Plants Expert", image: expert5 },

  { id: 6, name: "Frank Moss", specialization: "Ornamental Plants Expert", image: expert6 },
];

export default function GreenExperts() {
  return (
 <section className="py-12 bg-gray-700">
  <div className="max-w-7xl mx-auto px-4 text-center">
   <h2 className="text-3xl font-bold text-white mb-8 hover:text-blue-400 transition-colors duration-300">
   Meet Our Green Experts</h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     {experts.map((expert) => (
   <div
   key={expert.id}
  className="bg-white p-6 rounded-lg shadow hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
    >
   <img
    src={expert.image}
    alt={expert.name}
 className="w-32 h-32 mx-auto rounded-full mb-4 object-cover transition-transform duration-500 hover:scale-110" />
  <h3 className="text-xl font-semibold mb-2 text-black">{expert.name}</h3>
  <p className="text-gray-800 text-sm">{expert.specialization}</p>
     </div>
   ))}
  </div>
   </div>
    </section>
  );
}
