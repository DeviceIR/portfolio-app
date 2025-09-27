import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero / Mission Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 text-[var(--color-text)] bg-[var(--color-bg-nav)] shadow-sm mb-10 rounded-2xl">
        <Heading as="h1" className="text-4xl md:text-5xl mb-4">
          Our Mission
        </Heading>
        <p className="max-w-2xl text-lg md:text-xl">
          At <span className="font-semibold text-blue-600">YourFirm</span>, our
          mission is to deliver innovative solutions that combine design,
          technology, and creativity to make lasting impact for our clients.
        </p>
      </section>

      {/*  Projects  */}
      <section className="flex-1 px-6 py-16 text-[var(--color-text)] bg-[var(--color-bg-nav)] rounded-2xl">
        <Heading as="h2" className="text-3xl md:text-4xl mb-8 text-center">
          Featured Projects
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 4).map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="bg-[var(--color-mainback)] rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 p-6 flex flex-col"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-48 w-full scale-none"
              />
              <Heading
                as="h3"
                className="text-xl font-semibold mb-2 text-[var(--color-freeze)]"
              >
                {project.title}
              </Heading>
              <p className="text-gray-700 flex-1">
                {project.description.slice(0, 80)}...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
