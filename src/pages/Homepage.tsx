import React from "react";
import Heading from "../components/ui/Heading";

export default function HomePage() {
  // text-[var(--color-text)] bg-[var(--color-bg)]
  return (
    <div className="w-full min-h-screen  flex flex-col">
      {/* Hero / Mission Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 text-[var(--color-text)] bg-[var(--color-bg-content)] shadow-sm mb-10">
        <Heading as="h1" className="text-4xl md:text-5xl mb-4">
          Our Mission
        </Heading>
        <p className="max-w-2xl text-lg md:text-xl">
          At <span className="font-semibold text-blue-600">YourFirm</span>, our
          mission is to deliver innovative solutions that combine design,
          technology, and creativity to make lasting impact for our clients.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="flex-1 px-6 py-16 text-[var(--color-text)] bg-[var(--color-bg-content)] ">
        <Heading as="h2" className="text-3xl md:text-4xl mb-8 text-center">
          Featured Projects
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Example Project Card */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 1"
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600 flex-1">
              A short description of the project highlighting the main outcome
              and value delivered.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 2"
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-600 flex-1">
              Another great project showcasing your firm’s expertise and
              creativity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 3"
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-600 flex-1">
              A brief overview of the project, making it stand out visually and
              professionally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
