import Navigation from "../components/Navigation";

const Projects = () => {
  const projectList = [
    {
      title: "Medifluent",
      desc: "A Flask-based AI medical assistant powered by LLaMA 3, helping users find drugs, remedies, and nearby hospitals.",
      tech: ["Flask", "LLaMA 3", "Tailwind", "JavaScript"],
    },
    {
      title: "E-Waste Management Platform",
      desc: "A web-based solution for logging and rewarding e-waste deposits using Google Maps & image uploads.",
      tech: ["Flask", "SQLite", "Google Maps API", "Tailwind"],
    },
    {
      title: "Loop of Hope (NASA Hackathon)",
      desc: "An educational game showing how daily decisions impact climate, built for the NASA Space Apps Challenge.",
      tech: ["JavaScript", "Game Design", "NASA Data", "HTML/CSS"],
    },
    {
      title: "Event Manager App",
      desc: "A Node.js + MongoDB application that lets users create events, RSVP, and manage attendees in real-time.",
      tech: ["Node.js", "MongoDB", "Express", "Tailwind"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all"
            >
              <div className="h-48 bg-zinc-800" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-zinc-800 rounded text-xs"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
