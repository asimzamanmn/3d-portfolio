import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="space-y-6">
          <p className="text-xl text-zinc-300">
            I'm Asim Zaman M N, a tech enthusiast and Computer Science student at RSET, Kochi. I love building meaningful software products that solve real-world problems.
          </p>
          <p className="text-zinc-400">
            My experience ranges from web development and AI to embedded systems and IoT. I’ve interned at NeST Digital where I worked with Angular and Arduino, gaining hands-on exposure to both frontend development and embedded systems.
          </p>
          <p className="text-zinc-400">
            I’ve developed projects like an e-waste management platform and a medical assistant powered by LLaMA 3. These projects reflect my passion for combining AI, data, and design to build impactful solutions.
          </p>
          <p className="text-zinc-400">
            My tech stack includes Python, Flask, JavaScript, C++, and SQL databases. I’m also skilled in using APIs like Google Maps and integrating chatbots into web apps.
          </p>
          <p className="text-zinc-400">
            Beyond coding, I actively participate in hackathons and tech communities. I believe in continuous learning and collaboration to grow as a developer and a leader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
