import { Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listing, cart functionality, and order management.",
    image: "/projects/e-commerce.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Tailwind"],
    github: "https://github.com/yujia10/techhive-ecommerce",
  },
  {
    title: "Music DJ Platform",
    description:
      "A creative music platform built with React, enabling live coding and interactive DJ-style music performance.",
    image: "/projects/music.png",
    tags: ["React", "Strudel"],
    github: "https://github.com/yujia10/strudel_reactor",
  },
  {
    title: "Kindergarten Finder",
    description:
      "A web application that allows users to search and explore kindergartens based on basic information.",
    image: "/projects/kindy.png",
    tags: ["Ruby on Rails", "PostgreSQL", "SASS", "Bootstrap"],
    github: "https://github.com/yujia10/BaybeMe",
  },
  {
    title: "Zoo Web Application",
    description:
      "A zoo information web application built using .NET MVC with a JavaScript front end and Tailwind for styling.",
    image: "/projects/zoo.png",
    tags: [".NET", "MVC", "JavaScript", "Tailwind"],
    github: "https://github.com/yujia10/Zoo-App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Selected projects{" "}
            <span className="font-serif italic font-normal text-white">
              from my learning journey
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"/>

                 {/* Overlay Link */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-4 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
