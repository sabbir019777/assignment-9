
const careTips = [
  {
    id: 1,
    title: "Watering",
    description:
      "Most indoor plants prefer moderate watering. Water when the topsoil feels dry.",
    icon: "💧",
  },
  {
    id: 2,
    title: "Sunlight",
    description:
      "Place plants near bright, indirect sunlight. Avoid harsh direct sunlight.",
    icon: "☀️",
  },
  {
    id: 3,
    title: "Fertilizing",
    description:
      "Feed your plants with balanced liquid fertilizer once a month during the growing season.",
    icon: "🌱",
  },
  {
    id: 4,
    title: "Humidity",
    description:
      "Maintain moderate humidity for tropical plants. Mist occasionally or use a humidifier.",
    icon: "💨",
  },
  {
    id: 5,
    title: "Pruning",
    description:
      "Trim dead or yellow leaves regularly to encourage new growth and maintain plant shape.",
    icon: "✂️",
  },
  {
    id: 6,
    title: "Repotting",
    description:
      "Repot your plants every 1-2 years to provide fresh soil and enough space for root growth.",
    icon: "🪴",
  },
];

export default function PlantCare() {
  return (
   <section className="py-12 bg-gray-700">
   <div className="max-w-7xl mx-auto px-4 text-center">
  <h2 className="text-3xl font-bold text-white mb-12 hover:text-blue-400 transition-colors duration-300">
    Plant Care Tips </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {careTips.map((tip) => (
    <div
    key={tip.id}
  className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" >
   <div className="text-6xl mb-6">{tip.icon}</div>
 <h3 className="text-2xl font-semibold mb-3 text-black">{tip.title}</h3>
    <p className="text-black text-base">{tip.description}</p>
   </div>
    ))}
  </div>
    </div>
    </section>
  );
}
