
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Creative Developer</h1>
            <p className="text-lg md:text-xl text-white/80">Crafting digital experiences</p>
          </motion.div>
        </div>
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
                I'm a creative developer passionate about building immersive digital experiences 
                that merge design and technology.
              </p>
              <p className="text-lg">
                With expertise in React, Three.js, and WebGL, I create interactive 
                websites that push the boundaries of web development.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Skills</h3>
              <ul className="grid grid-cols-2 gap-4 text-white/80">
                <li>React</li>
                <li>Three.js</li>
                <li>WebGL</li>
                <li>TypeScript</li>
                <li>GSAP</li>
                <li>Framer Motion</li>
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
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-white/10"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Project {item}</h3>
                  <p className="text-white/60">A brief description of the project and its key features.</p>
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
