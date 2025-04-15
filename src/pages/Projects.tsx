
import Navigation from "../components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project placeholders - will be replaced with actual projects */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="bg-zinc-900 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all"
            >
              <div className="h-48 bg-zinc-800"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-zinc-400 mb-4">A brief description of this project and the technologies used.</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-zinc-800 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-zinc-800 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Tailwind</span>
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
