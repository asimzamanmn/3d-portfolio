
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="space-y-6">
          <p className="text-xl text-zinc-300">
            I'm a passionate developer and designer focused on creating immersive web experiences.
          </p>
          <p className="text-zinc-400">
            With expertise in modern web technologies including React, Three.js, and WebGL, I build 
            interactive and visually compelling digital experiences that merge art and technology.
          </p>
          <p className="text-zinc-400">
            My background in both design and development allows me to approach projects holistically,
            ensuring both aesthetic appeal and technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
