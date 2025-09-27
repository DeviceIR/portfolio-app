import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Heading from "../components/ui/Heading";

export default function DetailedProject() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project)
    return <p className="text-center mt-20 text-lg">Project not found</p>;

  // Random details for rooms/services
  const randomRooms = Math.floor(Math.random() * 5) + 1;
  const randomServices = ["Wi-Fi", "Parking", "Gym", "Pool", "Pet Friendly"]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[var(--color-bg-content)] rounded-2xl shadow-lg mt-2">
      {/* Title */}
      <Heading
        as="h1"
        className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)] text-center"
      >
        {project.title}
      </Heading>

      {/* Hero Image */}
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-80 md:h-[400px] object-cover rounded-2xl mb-6 shadow-md"
      />

      {/* Project Description */}
      <p className="text-lg md:text-xl mb-6 text-[var(--color-text)] leading-relaxed">
        {project.description}
      </p>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--color-bg-nav)] p-6 rounded-2xl shadow-inner">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--color-text)]">
            Project Info
          </h2>
          <ul className="list-disc list-inside text-[var(--color-text)]">
            <li>Rooms: {randomRooms}</li>
            <li>Area: {Math.floor(Math.random() * 200 + 50)} m²</li>
            <li>Budget: ${Math.floor(Math.random() * 50000 + 10000)}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--color-text)]">
            Services
          </h2>
          <ul className="list-disc list-inside text-[var(--color-text)]">
            {randomServices.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx + 2}`}
            className="rounded-lg object-cover h-40 md:h-52 w-full shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}
