
import Navigation from "../components/Navigation";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="relative w-full h-screen">
        <iframe 
          src='https://my.spline.design/elegantbeautyofdarkaestheticscopy-ueI8vcwJBAKq81WJ0lm01SRN/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="absolute inset-0 w-full h-full"
          title="3D Scene"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Exploring the intersection of design and technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
