import Navigation from "../components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Spline */}
      <section className="relative w-full h-[calc(100vh-4rem)] md:h-screen">
        <iframe 
          src='https://my.spline.design/elegantbeautyofdarkaestheticscopy-ueI8vcwJBAKq81WJ0lm01SRN/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="absolute inset-0 w-full h-full"
          title="3D Scene"
          allow="autoplay; fullscreen; vr"
        />
        
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-black/90 py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                I'm a Computer Science student at RSET, Kochi who’s passionate about solving real-world problems through creative tech solutions.
              </p>
              <p className="text-lg">
                From full-stack web apps and medical chatbots to climate awareness games, I explore the intersection of AI, design, and the web.
              </p>
              <p className="text-lg">
                I’ve interned at NeST Digital and have experience with everything from Flask and LLaMA to deploying production-ready web systems.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Skills</h3>
              <ul className="grid grid-cols-2 gap-4 text-white/80">
                <li>React</li>
                <li>Flask</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>LLaMA / Ollama</li>
                <li>MongoDB & SQL</li>
                <li>TypeScript</li>
                <li>Premiere Pro</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section className="min-h-screen bg-black py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Medifluent",
                desc: "A Flask-based AI medical assistant powered by LLaMA 3, helping users find drugs, remedies, and nearby hospitals.",
              },
              {
                title: "E-Waste Management Platform",
                desc: "A web-based solution for logging and rewarding e-waste deposits using Google Maps & image uploads.",
              },
              {
                title: "Loop of Hope (NASA Hackathon)",
                desc: "An educational game showing how daily decisions impact climate, built for the NASA Space Apps Challenge.",
              },
              {
                title: "Event Manager App",
                desc: "A Node.js + MongoDB application that lets users create events, RSVP, and manage attendees in real-time.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-white/10" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;
