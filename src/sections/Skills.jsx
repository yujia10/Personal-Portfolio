const skills = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Bootstrap / Tailwind",
  "Node.js",
  "ASP.NET MVC",
  "MS SQL Server",
  "Python",
  "Java",
  "Git / GitHub",
  "Figma",
  "Jira",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center mx-auto max-w-3xl mb-16 relative z-10">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          My Skills
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Core skills{" "}
          <span className="font-serif italic font-normal text-white">
            I use to build and learn
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass rounded-lg p-6 shadow-xs transition-transform hover:-translate-y-1 duration-200 flex items-center justify-center text-center min-h-24"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
