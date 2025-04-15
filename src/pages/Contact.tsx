import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-8">
          <p className="text-xl text-zinc-300">
            Interested in working together? Let's connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <div className="space-y-3 text-zinc-400">
                <p>Email: asimzamanmn@gmail.com</p>
                <p>Phone: 7994875491</p>
                <p>Location: Kochi, Kerala</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium mb-4">Social Links</h3>
              <div className="space-y-3 text-zinc-400">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/asimzamanmn" className="hover:underline" target="_blank" rel="noopener noreferrer">@asimzamanmn</a></p>
                <p>GitHub: <a href="https://example.github.com" className="hover:underline" target="_blank" rel="noopener noreferrer">@example</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
