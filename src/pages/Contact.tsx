
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
                <p>Email: hello@example.com</p>
                <p>Location: New York, NY</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium mb-4">Social Links</h3>
              <div className="space-y-3 text-zinc-400">
                <p>LinkedIn: @username</p>
                <p>GitHub: @username</p>
                <p>Twitter: @username</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
