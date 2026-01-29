import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, maintainable code with long-term quality in mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with others to turn ideas into practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving through real-world practice.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground font-bold text-xl md:text-2xl traking-wider upper-case">
                {" "}
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl leading-tight animate-fade-in animation-delay-100 text-white">
              Passionate Software Developer & Tech Creator
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m an aspiring software developer with a strong interest in
                building meaningful, real-world web applications. My journey
                began with curiosity about how the web works, and has grown into
                a genuine enthusiasm for turning ideas into interactive
                experiences.
              </p>
              <p>
                I work with technologies like React, JavaScript, and modern web
                tools to create clean, user-centered interfaces, balancing
                technical problem-solving with thoughtful design.
              </p>
              <p>
                Beyond coding, I enjoy learning through hands-on projects,
                spending time in nature, volunteering, and staying connected
                with the community. I value continuous growth and using my
                skills to create positive impact.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm-grid-cols-2 gap-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
