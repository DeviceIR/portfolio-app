import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import { oldProjects } from "../data/oldProjects";

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen flex flex-col px-6 py-16 bg-[var(--color-bg-nav)] text-[var(--color-text)] rounded-2xl">
      {/* title */}
      <Heading as="h1" className="text-4xl md:text-5xl mb-12 text-center">
        Portfolio
      </Heading>

      {/* Grid for old projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {oldProjects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="bg-[var(--color-mainback)] rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 overflow-hidden "
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-40 md:h-56 object-cover  aspect-[4/3]"
            />
            <div className="p-4">
              <Heading as="h3" className="text-xl font-semibold text-gray-700">
                {project.title}
              </Heading>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
